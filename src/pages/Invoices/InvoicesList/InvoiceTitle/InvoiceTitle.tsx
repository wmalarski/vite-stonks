import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/InvoiceApi";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

type Props = {
  sheetId: number;
  invoice: Invoice;
};

export const InvoiceTitle = ({ sheetId, invoice }: Props): ReactElement => {
  return (
    <Link key={`title-${invoice.id}`} to={paths.invoice(sheetId, invoice.id)}>
      {invoice.title}
    </Link>
  );
};
