import { Loading } from "@/components/Loading/Loading";
import { InvoicePreview } from "@/modules/InvoicePreview/InvoicePreview";
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

  const invoiceApi = useInvoiceApi();
  const { data, isLoading } = useQuery(
    invoiceApi.key(sheet.sheet_id, index),
    invoiceApi.get,
    { refetchOnWindowFocus: false }
  );

  if (isLoading || !data) return <Loading />;

  return (
    <div>
      <InvoiceHeader invoice={data} sheet={sheet} />
      <InvoicePreview invoice={data} sheet={sheet} />
    </div>
  );
};
