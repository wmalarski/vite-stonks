import { CopyInvoice } from "@/modules/CopyInvoice/CopyInvoice";
import { EditInvoice } from "@/modules/EditInvoice/EditInvoice";
import { RemoveInvoice } from "@/modules/RemoveInvoice/RemoveInvoice";
import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useNavigate } from "react-location";
import * as classes from "./InvoiceActions.css";

type Props = {
  invoice: Invoice;
  sheet: Sheet;
};

export const InvoiceActions = ({ sheet, invoice }: Props): ReactElement => {
  const navigate = useNavigate();

  const handleCopySuccess = (copy: Invoice) => {
    navigate({ to: paths.invoice(sheet.id, copy.index) });
  };

  return (
    <div key={invoice.index} className={classes.list}>
      <EditInvoice invoice={invoice} sheet={sheet} />
      <CopyInvoice
        invoice={invoice}
        onSuccess={handleCopySuccess}
        sheet={sheet}
      />
      <RemoveInvoice invoice={invoice} sheet={sheet} />
    </div>
  );
};
