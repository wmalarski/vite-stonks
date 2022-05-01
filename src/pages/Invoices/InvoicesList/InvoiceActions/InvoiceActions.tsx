import { CopyInvoice } from "@/modules/CopyInvoice/CopyInvoice";
import { EditInvoice } from "@/modules/EditInvoice/EditInvoice";
import { RemoveInvoice } from "@/modules/RemoveInvoice/RemoveInvoice";
import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import * as classes from "./InvoiceActions.css";

type Props = {
  invoice: Invoice;
  sheet: Sheet;
};

export const InvoiceActions = ({ invoice, sheet }: Props): ReactElement => {
  return (
    <div className={classes.list}>
      <EditInvoice invoice={invoice} sheet={sheet} />
      <CopyInvoice invoice={invoice} sheet={sheet} />
      <RemoveInvoice invoice={invoice} sheet={sheet} />
    </div>
  );
};
