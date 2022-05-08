import { Loading } from "@/components/Loading/Loading";
import { Home } from "@/pages/Home/Home";
import { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Companies = lazy(() => import("@/pages/Companies/Companies"));
const Invoice = lazy(() => import("@/pages/Invoice/Invoice"));
const Invoices = lazy(() => import("@/pages/Invoices/Invoices"));
const Reports = lazy(() => import("@/pages/Reports/Reports"));
const Settings = lazy(() => import("@/pages/Settings/Settings"));
const Sheet = lazy(() => import("@/pages/Sheet/Sheet"));
const Sheets = lazy(() => import("@/pages/Sheets/Sheets"));

export const Router = (): ReactElement => {
  return (
    <Suspense fallback={<Loading variant="viewport" />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Sheets />} />
            <Route path="sheet">
              <Route path=":sheetId" element={<Sheet />}>
                <Route index element={<Invoices />} />
                <Route path="companies" element={<Companies />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
                <Route path="invoice">
                  <Route path=":invoiceId" element={<Invoice />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
