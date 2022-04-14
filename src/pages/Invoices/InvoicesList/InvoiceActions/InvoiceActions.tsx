import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/SpreadSheetApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-location";
import * as classes from "./InvoiceActions.css";

type Props = {
  docId: number;
  invoice: Invoice;
};

export const InvoiceActions = ({ docId, invoice }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const handleCopyClick = () => {
    //
  };

  const handleRemoveClick = () => {
    //
  };

  return (
    <div className={classes.list}>
      <Button>
        <Link to={paths.invoice(docId, invoice.id)}>{t("invoiceDetails")}</Link>
      </Button>
      <Button onClick={handleCopyClick}>{t("invoiceCopy")}</Button>
      <Button onClick={handleRemoveClick}>{t("invoiceRemove")}</Button>
    </div>
  );
};
