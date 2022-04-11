import { ReactElement } from "react";
import { MakeGenerics } from "react-location";

export type LocationGenerics = MakeGenerics<{
  Params: {
    docId: string;
    invoiceId: string;
  };
  RouteMeta: {
    breadcrumb?: (params: LocationGenerics["Params"]) => ReactElement;
    sidebar?: (params: LocationGenerics["Params"]) => ReactElement;
  };
}>;
