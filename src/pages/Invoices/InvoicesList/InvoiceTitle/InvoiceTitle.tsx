import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/InvoiceApi";
import { ReactElement } from "react";
import { Link } from "react-location";

type Props = {
  sheetId: number;
  invoice: Invoice;
};

export const InvoiceTitle = ({ sheetId, invoice }: Props): ReactElement => {
  return (
    <Link
      key={`title-${invoice.index}`}
      to={paths.invoice(sheetId, invoice.index)}
    >
      {invoice.title}
    </Link>
  );
};
