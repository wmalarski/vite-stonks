import { Sheet } from "@/services/SheetApi";
import { rest } from "msw";
import { convert, db } from "../models";
import { contentRange, parseQueryParams } from "./utils";

const base = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/sheets`;

export const sheetsHandlers = [
  rest.get(base, (req, res, ctx) => {
    const { skip, take, where } = parseQueryParams(req.url.searchParams);

    const count = db.sheet.count({ where });
    const models = db.sheet.findMany({ where, skip, take });

    const sheets = models.flatMap((entity) => {
      const sheet = convert.toSheet(entity);
      return sheet ? [sheet] : [];
    });

    return res(
      ctx.json<Sheet[]>(sheets),
      ctx.set("content-range", contentRange({ skip, take, count }))
    );
  }),
];
