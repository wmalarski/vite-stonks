import { QuerySelectorWhere } from "@mswjs/data/lib/query/queryTypes";
import { rest } from "msw";
import { db } from "../models";

const base = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/sheets`;

const parseQueryParams = (
  searchParams: URLSearchParams,
  excludeKeys: string[] = []
) => {
  const paginationKeys = ["offset", "limit", "select"];
  const rawOffset = searchParams.get("offset");
  const rawLimit = searchParams.get("limit");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: QuerySelectorWhere<any> = {};
  const skip = rawOffset == null ? undefined : parseInt(rawOffset, 10);
  const take = rawLimit == null ? undefined : parseInt(rawLimit, 10);

  searchParams.forEach((value, key) => {
    if (paginationKeys.includes(key) || excludeKeys.includes(key)) return;
    where[key] = { equals: value };
  });

  return { skip, take, where };
};

export const handlers = [
  rest.get(base, (req, res, ctx) => {
    const { skip, take, where } = parseQueryParams(req.url.searchParams);

    const result = db.sheet.findMany({ where, skip, take });

    const actions = actionsEntities.flatMap((entity) => {
      const action = convert.toAction(entity);
      return action ? [action] : [];
    });

    return res(ctx.json<Action[]>(actions));

    /*
select
	*
offset
	0
limit
	11
*/

    return res(ctx.status(200));
  }),
  // rest.post(`${base}/logout`, (_req, res, ctx) => {
  //   sessionStorage.setItem("is-authenticated", "false");
  //   return res(ctx.status(204));
  // }),
  // rest.get(`${base}/user`, (_req, res, ctx) => {
  //   const isAuthenticated = sessionStorage.getItem("is-authenticated");
  //   if (!isAuthenticated) {
  //     return res(ctx.status(403), ctx.json({ errorMessage: "Not authorized" }));
  //   }
  //   return res(ctx.status(200), ctx.json({ username: "admin" }));
  // }),
];
// GET https://bqwpgicgoudcafdqjrwc.supabase.co/auth/v1/authorize?provider=google
