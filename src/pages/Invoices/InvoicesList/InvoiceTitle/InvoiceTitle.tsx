import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/InvoiceApi";
import { ReactElement } from "react";
import { Link } from "react-location";

type Props = {
  docId: number;
  invoice: Invoice;
};

export const InvoiceTitle = ({ docId, invoice }: Props): ReactElement => {
  return <Link to={paths.invoice(docId, invoice.id)}>{invoice.title}</Link>;
};
