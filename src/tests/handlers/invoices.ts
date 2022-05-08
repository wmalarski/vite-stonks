import { Invoice } from "@/services/InvoiceApi";
import { rest } from "msw";
import { mockInvoice } from "../mocks";
import { db } from "../models";
import { contentRange, parseQueryParams } from "./utils";

const base = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/invoices`;

export const invoicesHandlers = [
  rest.get(base, (req, res, ctx) => {
    const { skip, take, where } = parseQueryParams({
      searchParams: req.url.searchParams,
      map: { id: Number },
    });

    const count = db.invoice.count({ where });
    const models = db.invoice.findMany({ where, skip, take });

    const withCompany = models.flatMap((model) => {
      const query = { where: { id: { equals: model.company_id } } };
      const company = db.company.findFirst(query);
      return company ? [{ ...model, company }] : [];
    });

    if ("id" in where) {
      return res(ctx.status(200), ctx.json<Invoice>(withCompany[0]));
    }

    return res(
      ctx.status(200),
      ctx.json<Invoice[]>(withCompany),
      ctx.set("content-range", contentRange({ skip, take, count }))
    );
  }),
  rest.post<Invoice>(base, (req, res, ctx) => {
    const invoice = mockInvoice(req.body);
    db.invoice.create(invoice);
    return res(ctx.status(201), ctx.json<Invoice>(invoice));
  }),
  rest.patch<Invoice>(base, (req, res, ctx) => {
    const invoice = db.invoice.update({
      data: req.body,
      where: { id: { equals: req.body.id } },
    });
    if (!invoice) return res(ctx.status(404));

    const query = { where: { id: { equals: invoice.company_id } } };
    const company = db.company.findFirst(query);
    if (!company) return res(ctx.status(404));

    const withCompany = { ...invoice, company };
    return res(ctx.status(201), ctx.json<Invoice>(withCompany));
  }),
  rest.delete(base, (req, res, ctx) => {
    const { where } = parseQueryParams({
      searchParams: req.url.searchParams,
      map: { id: Number },
    });
    db.invoice.delete({ where });
    return res(ctx.status(200), ctx.json({}));
  }),
];
