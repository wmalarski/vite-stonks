import { Translation } from "@/components/Translation/Translation";
import { Invoice } from "@/pages/Invoice/Invoice";
import { Invoices } from "@/pages/Invoices/Invoices";
import { Settings } from "@/pages/Settings/Settings";
import { Sheet } from "@/pages/Sheet/Sheet";
import { Sheets } from "@/pages/Sheets/Sheets";
import { SheetSidebar } from "@/pages/SheetSidebar/SheetSidebar";
import { SheetsSidebar } from "@/pages/SheetsSidebar/SheetsSidebar";
import { Route } from "react-location";
import { LocationGenerics } from "./location";

export const routes = (): Route<LocationGenerics>[] => [
  {
    path: "/",
    element: <Sheets />,
    meta: {
      sidebar: () => <SheetsSidebar />,
    },
  },
  {
    path: "sheet",
    children: [
      {
        path: ":sheetId",
        element: <Sheet />,
        meta: {
          breadcrumb: () => <Translation label="navigation.sheet" />,
          sidebar: (params) => <SheetSidebar sheetId={params.sheetId} />,
        },
        children: [
          {
            path: "/",
            element: <Invoices />,
          },
          {
            path: "settings",
            element: <Settings />,
            meta: {
              breadcrumb: () => <Translation label="navigation.settings" />,
            },
          },
          {
            path: "invoice",
            children: [
              {
                path: ":invoiceId",
                element: <Invoice />,
                meta: {
                  breadcrumb: () => <Translation label="navigation.invoice" />,
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
