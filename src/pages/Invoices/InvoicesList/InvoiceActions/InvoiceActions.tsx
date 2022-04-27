import { CopyInvoice } from "@/modules/CopyInvoice/CopyInvoice";
import { EditInvoice } from "@/modules/EditInvoice/EditInvoice";
import { RemoveInvoice } from "@/modules/RemoveInvoice/RemoveInvoice";
import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./InvoiceActions.css";

type Props = {
  index: number;
  invoice: Invoice;
  sheet: Sheet;
};

export const InvoiceActions = ({
  index,
  invoice,
  sheet,
}: Props): ReactElement => {
  const navigate = useNavigate();

  const handleCopySuccess = () => {
    navigate(paths.invoice(sheet.id, index));
  };

  return (
    <div className={classes.list}>
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
