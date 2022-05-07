// src/mocks/browser.js
import { setupWorker } from "msw";
import { handlers } from "./handlers/auth";
import { db } from "./models";

const restBase = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1`;

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  ...handlers,
  ...db.sheet.toHandlers("rest", `${restBase}/sheets`)
);
