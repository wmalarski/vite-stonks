import { setupWorker } from "msw";
import { companyHandlers } from "./handlers/company";
import { invoicesHandlers } from "./handlers/invoices";
import { reportHandlers } from "./handlers/reports";
import { sheetsHandlers } from "./handlers/sheets";

export const worker = setupWorker(
  ...companyHandlers,
  ...invoicesHandlers,
  ...reportHandlers,
  ...sheetsHandlers
);
