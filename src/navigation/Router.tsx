import { Companies } from "@/pages/Companies/Companies";
import { Home } from "@/pages/Home/Home";
import { Invoice } from "@/pages/Invoice/Invoice";
import { Invoices } from "@/pages/Invoices/Invoices";
import { Reports } from "@/pages/Reports/Reports";
import { Settings } from "@/pages/Settings/Settings";
import { Sheet } from "@/pages/Sheet/Sheet";
import { Sheets } from "@/pages/Sheets/Sheets";
import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = (): ReactElement => {
  return (
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
  );
};
