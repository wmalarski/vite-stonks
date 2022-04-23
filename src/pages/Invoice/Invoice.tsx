import { Loading } from "@/components/Loading/Loading";
import { useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { InvoiceDetails } from "./InvoiceDetails/InvoiceDetails";

export const Invoice = (): ReactElement => {
  const params = useParams();
  const id = Number(params.sheetId);

  const sheetApi = useSheetApi();
  const { data } = useQuery(sheetApi.key(id), sheetApi.get);

  if (!data) return <Loading />;

  return <InvoiceDetails sheet={data} />;
};
