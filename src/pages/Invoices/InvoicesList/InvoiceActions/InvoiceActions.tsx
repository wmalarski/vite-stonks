import { Invoice } from "@/services/InvoiceApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./InvoiceActions.css";

type Props = {
  sheetId: number;
  invoice: Invoice;
};

export const InvoiceActions = ({ sheetId, invoice }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const handleCopyClick = () => {
    console.log({ sheetId, invoice });
  };

  const handleRemoveClick = () => {
    console.log({ sheetId, invoice });
  };

  return (
    <div className={classes.list}>
      <Button onClick={handleCopyClick}>{t("invoiceCopy")}</Button>
      <Button danger onClick={handleRemoveClick}>
        {t("invoiceRemove")}
      </Button>
    </div>
  );
};
