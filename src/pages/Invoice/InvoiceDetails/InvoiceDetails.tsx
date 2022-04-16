import { Loading } from "@/components/Loading/Loading";
import { LocationGenerics } from "@/navigation/location";
import { useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useMatch } from "react-location";
import { useQuery } from "react-query";
import { InvoiceHeader } from "./InvoiceHeader/InvoiceHeader";

type Props = {
  sheet: Sheet;
};

export const InvoiceDetails = ({ sheet }: Props): ReactElement => {
  const { params } = useMatch<LocationGenerics>();
  const index = Number(params.invoiceId);

  const sheetApi = useInvoiceApi();
  const { data, isLoading } = useQuery(
    sheetApi.key(sheet.sheet_id, index),
    sheetApi.get,
    { refetchOnWindowFocus: false }
  );

  if (isLoading || !data) return <Loading />;

  return (
    <div>
      <InvoiceHeader invoice={data} sheet={sheet} />
      <pre>{JSON.stringify({ data, sheet }, null, 2)}</pre>
    </div>
  );
};
