import { Sheet } from "@/services/SheetApi";
import { rest } from "msw";
import { mockSheet } from "../mocks";
import { db } from "../models";
import { contentRange, parseQueryParams } from "./utils";

const base = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/sheets`;

export const sheetsHandlers = [
  rest.get(base, (req, res, ctx) => {
    const { skip, take, where } = parseQueryParams({
      searchParams: req.url.searchParams,
      map: { id: Number },
    });

    const count = db.sheet.count({ where });
    const models = db.sheet.findMany({ where, skip, take });

    if ("id" in where) {
      return res(ctx.status(200), ctx.json<Sheet>(models[0]));
    }

    return res(
      ctx.status(200),
      ctx.json<Sheet[]>(models),
      ctx.set("content-range", contentRange({ skip, take, count }))
    );
  }),
  rest.post<Sheet>(base, (req, res, ctx) => {
    const sheet = mockSheet(req.body);
    db.sheet.create(sheet);
    return res(ctx.status(201), ctx.json<Sheet>(sheet));
  }),
  rest.patch<Sheet>(base, (req, res, ctx) => {
    const sheet = db.sheet.update({
      data: req.body,
      where: { id: { equals: req.body.id } },
    });
    if (!sheet) return res(ctx.status(404));
    return res(ctx.status(201), ctx.json<Sheet>(sheet));
  }),
  rest.delete(base, (req, res, ctx) => {
    const { where } = parseQueryParams({
      searchParams: req.url.searchParams,
      map: { id: Number },
    });
    db.sheet.delete({ where });
    return res(ctx.status(200), ctx.json({}));
  }),
];
