import { EditInvoice } from "@/modules/EditInvoice/EditInvoice";
import { RemoveInvoice } from "@/modules/RemoveInvoice/RemoveInvoice";
import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./InvoiceActions.css";

type Props = {
  sheet: Sheet;
  invoice: Invoice;
};

export const InvoiceActions = ({ sheet, invoice }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const handleRemoveClick = () => {
    console.log({ sheet, invoice });
  };

  return (
    <div key={invoice.index} className={classes.list}>
      <EditInvoice invoice={invoice} sheet={sheet} />
      <RemoveInvoice invoice={invoice} sheet={sheet} />
      <Button danger onClick={handleRemoveClick}>
        {t("invoiceRemove")}
      </Button>
    </div>
  );
};
