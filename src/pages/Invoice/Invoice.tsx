import { Loading } from "@/components/Loading/Loading";
import { LocationGenerics } from "@/navigation/location";
import { useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useMatch } from "react-location";
import { useQuery } from "react-query";
import { InvoiceDetails } from "./InvoiceDetails/InvoiceDetails";

export const Invoice = (): ReactElement => {
  const { params } = useMatch<LocationGenerics>();
  const id = Number(params.sheetId);

  const sheetApi = useSheetApi();
  const { data } = useQuery(sheetApi.key(id), sheetApi.get);

  if (!data) return <Loading />;

  return <InvoiceDetails sheet={data} />;
};
