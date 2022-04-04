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
        children: [
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "invoice",
            children: [
              {
                path: ":invoiceId",
                element: <Invoice />,
              },
            ],
          },
        ],
      },
    ],
  },
];
