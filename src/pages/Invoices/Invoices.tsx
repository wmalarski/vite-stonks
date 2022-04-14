import { SheetHeader } from "@/modules/SheetHeader/SheetHeader";
import { LocationGenerics } from "@/navigation/location";
import { useDocApi } from "@/services/DocApi";
import { ReactElement } from "react";
import { useMatch } from "react-location";
import { useQuery } from "react-query";
import * as classes from "./Invoices.css";
import { InvoicesList } from "./InvoicesList/InvoicesList";

export const Invoices = (): ReactElement | null => {
  const { params } = useMatch<LocationGenerics>();
  const id = Number(params.docId);

  const docApi = useDocApi();
  const { data } = useQuery(docApi.key(id), docApi.get);

  if (!data) return null;

  return (
    <div>
      <SheetHeader doc={data} />
      <div className={classes.content}>
        <InvoicesList doc={data} />
      </div>
    </div>
  );
};
