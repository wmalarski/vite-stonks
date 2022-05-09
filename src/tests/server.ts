import { setupServer } from "msw/node";
import { companyHandlers } from "./handlers/company";
import { invoicesHandlers } from "./handlers/invoices";
import { reportHandlers } from "./handlers/reports";
import { reportsViewHandlers } from "./handlers/reportsView";
import { sheetsHandlers } from "./handlers/sheets";

export const server = setupServer(
  ...companyHandlers,
  ...invoicesHandlers,
  ...reportHandlers,
  ...reportsViewHandlers,
  ...sheetsHandlers
);
