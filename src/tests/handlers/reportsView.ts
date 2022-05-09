import { ReportView } from "@/services/ReportApi";
import { rest } from "msw";
import { db } from "../models";
import { contentRange, parseQueryParams } from "./utils";

const base = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/reports_view`;

export const reportsViewHandlers = [
  rest.get(base, (req, res, ctx) => {
    const { skip, take, where } = parseQueryParams({
      searchParams: req.url.searchParams,
    });

    const count = db.report.count({ where });
    const models = db.report.findMany({ where, skip, take });

    return res(
      ctx.status(200),
      ctx.json<ReportView[]>(models),
      ctx.set("content-range", contentRange({ skip, take, count }))
    );
  }),
];
