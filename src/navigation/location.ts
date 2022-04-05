import { ReactElement } from "react";
import { MakeGenerics } from "react-location";

export type LocationGenerics = MakeGenerics<{
  Params: {
    sheetId: string;
    invoiceId: string;
  };
  RouteMeta: {
    breadcrumb: (params: LocationGenerics["Params"]) => ReactElement;
  };
}>;
