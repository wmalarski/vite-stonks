import { Translation } from "@/components/Translation/Translation";
import { Invoice } from "@/pages/Invoice/Invoice";
import { Settings } from "@/pages/Settings/Settings";
import { Sheet } from "@/pages/Sheet/Sheet";
import { Sheets } from "@/pages/Sheets/Sheets";
import { Route } from "react-location";
import { LocationGenerics } from "./location";

export const routes = (): Route<LocationGenerics>[] => [
  {
    path: "/",
    element: <Sheets />,
  },
  {
    path: "sheet",
    children: [
      {
        path: ":sheetId",
        element: <Sheet />,
        meta: {
          breadcrumb: () => <Translation label="sheet" />,
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
