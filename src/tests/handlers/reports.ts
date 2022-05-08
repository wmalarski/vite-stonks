import { Report } from "@/services/ReportApi";
import { rest } from "msw";
import { mockReport } from "../mocks";
import { db } from "../models";
import { contentRange, parseQueryParams } from "./utils";

const base = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/reports`;

export const reportHandlers = [
  rest.get(base, (req, res, ctx) => {
    const { skip, take, where } = parseQueryParams({
      searchParams: req.url.searchParams,
      map: { id: Number },
    });

    const count = db.report.count({ where });
    const models = db.report.findMany({ where, skip, take });

    if ("id" in where) {
      return res(ctx.status(200), ctx.json<Report>(models[0]));
    }

    return res(
      ctx.status(200),
      ctx.json<Report[]>(models),
      ctx.set("content-range", contentRange({ skip, take, count }))
    );
  }),
  rest.post<Report>(base, (req, res, ctx) => {
    const report = mockReport(req.body);
    db.report.create(report);
    return res(ctx.status(201), ctx.json<Report>(report));
  }),
  rest.patch<Report>(base, (req, res, ctx) => {
    const report = db.report.update({
      data: req.body,
      where: { id: { equals: req.body.id } },
    });
    if (!report) return res(ctx.status(404));
    return res(ctx.status(201), ctx.json<Report>(report));
  }),
  rest.delete(base, (req, res, ctx) => {
    const { where } = parseQueryParams({
      searchParams: req.url.searchParams,
      map: { id: Number },
    });
    db.report.delete({ where });
    return res(ctx.status(200), ctx.json({}));
  }),
];
