import { SheetHeader } from "@/modules/SheetHeader/SheetHeader";
import { LocationGenerics } from "@/navigation/location";
import { useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useMatch } from "react-location";
import { useQuery } from "react-query";
import * as classes from "./Invoices.css";
import { InvoicesList } from "./InvoicesList/InvoicesList";

export const Invoices = (): ReactElement | null => {
  const { params } = useMatch<LocationGenerics>();
  const id = Number(params.sheetId);

  const sheetApi = useSheetApi();
  const { data } = useQuery(sheetApi.key(id), sheetApi.get);

  if (!data) return null;

  return (
    <div>
      <SheetHeader sheet={data} />
      <div className={classes.content}>
        <InvoicesList sheet={data} />
      </div>
    </div>
  );
};
