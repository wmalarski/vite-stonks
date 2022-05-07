import { rest } from "msw";

const base = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/sheets`;
export const handlers = [
  rest.get(`${base}/authorize`, (_req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");
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
