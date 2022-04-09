import { Translation } from "@/components/Translation/Translation";
import { Invoice } from "@/pages/Invoice/Invoice";
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
          breadcrumb: () => <Translation label="sheet" />,
          sidebar: (params) => <SheetSidebar sheetId={params.sheetId} />,
        },
        children: [
          {
            path: "settings",
            element: <Settings />,
            meta: {
              breadcrumb: () => <Translation label="settings" />,
            },
          },
          {
            path: "invoice",
            children: [
              {
                path: ":invoiceId",
                element: <Invoice />,
                meta: {
                  breadcrumb: () => <Translation label="invoice" />,
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
