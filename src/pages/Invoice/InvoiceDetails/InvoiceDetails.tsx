import { ErrorView } from "@/components/ErrorView/ErrorView";
import { Loading } from "@/components/Loading/Loading";
import { InvoicePreview } from "@/modules/InvoicePreview/InvoicePreview";
import { useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { InvoiceHeader } from "./InvoiceHeader/InvoiceHeader";

type Props = {
  sheet: Sheet;
};

export const InvoiceDetails = ({ sheet }: Props): ReactElement => {
  const params = useParams();
  const invoiceId = Number(params.invoiceId);

  const invoiceApi = useInvoiceApi();
  const { data, error, isLoading, refetch } = useQuery(
    invoiceApi.key(invoiceId),
    invoiceApi.get,
    { refetchOnWindowFocus: false }
  );

  const handleRefreshClick = () => {
    refetch();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    return <ErrorView onRefreshClick={handleRefreshClick} />;
  }

  return (
    <div>
      <InvoiceHeader invoice={data} sheet={sheet} />
      <InvoicePreview invoice={data} sheet={sheet} />
    </div>
  );
};
