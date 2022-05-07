import { setupWorker } from "msw";
import { sheetsHandlers } from "./handlers/sheets";

export const worker = setupWorker(...sheetsHandlers);
