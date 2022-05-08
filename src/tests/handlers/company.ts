import { Company } from "@/services/CompanyApi";
import { rest } from "msw";
import { mockCompany } from "../mocks";
import { db } from "../models";
import { contentRange, parseQueryParams } from "./utils";

const base = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/companies`;

export const companyHandlers = [
  rest.get(base, (req, res, ctx) => {
    const { skip, take, where } = parseQueryParams({
      searchParams: req.url.searchParams,
      map: { id: Number },
    });

    const count = db.company.count({ where });
    const models = db.company.findMany({ where, skip, take });

    if ("id" in where) {
      return res(ctx.status(200), ctx.json<Company>(models[0]));
    }

    return res(
      ctx.status(200),
      ctx.json<Company[]>(models),
      ctx.set("content-range", contentRange({ skip, take, count }))
    );
  }),
  rest.post<Company>(base, (req, res, ctx) => {
    const company = mockCompany(req.body);
    db.company.create(company);
    return res(ctx.status(201), ctx.json<Company>(company));
  }),
  rest.patch<Company>(base, (req, res, ctx) => {
    const company = db.company.update({
      data: req.body,
      where: { id: { equals: req.body.id } },
    });
    if (!company) return res(ctx.status(404));
    return res(ctx.status(201), ctx.json<Company>(company));
  }),
  rest.delete(base, (req, res, ctx) => {
    const { where } = parseQueryParams({
      searchParams: req.url.searchParams,
      map: { id: Number },
    });
    db.company.delete({ where });
    return res(ctx.status(200), ctx.json({}));
  }),
];
