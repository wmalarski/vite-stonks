import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/InvoiceApi";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

type Props = {
  sheetId: number;
  index: number;
  invoice: Invoice;
};

export const InvoiceTitle = ({
  sheetId,
  invoice,
  index,
}: Props): ReactElement => {
  return (
    <Link key={`title-${index}`} to={paths.invoice(sheetId, index)}>
      {invoice.title}
    </Link>
  );
};
