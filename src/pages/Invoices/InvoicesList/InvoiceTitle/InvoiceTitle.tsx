import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/InvoiceApi";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

type Props = {
  invoice: Invoice;
};

export const InvoiceTitle = ({ invoice }: Props): ReactElement => {
  return (
    <Link
      key={`title-${invoice.id}`}
      to={paths.invoice(invoice.sheet_id, invoice.id)}
    >
      {invoice.title}
    </Link>
  );
};
