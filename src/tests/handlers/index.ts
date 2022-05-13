import { companyHandlers } from "./company";
import { invoicesHandlers } from "./invoices";
import { reportHandlers } from "./reports";
import { reportsViewHandlers } from "./reportsView";
import { sheetsHandlers } from "./sheets";

export const handlers = [
  ...companyHandlers,
  ...invoicesHandlers,
  ...reportHandlers,
  ...reportsViewHandlers,
  ...sheetsHandlers,
];
