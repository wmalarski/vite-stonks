import { MakeGenerics } from "react-location";

export type LocationGenerics = MakeGenerics<{
  Params: {
    sheetId: string;
    invoiceId: string;
  };
}>;
