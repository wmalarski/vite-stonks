import { Invoice } from "@/services/SpreadSheetApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./InvoiceActions.css";

type Props = {
  docId: number;
  invoice: Invoice;
};

export const InvoiceActions = ({ docId, invoice }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const handleCopyClick = () => {
    console.log({ docId, invoice });
  };

  const handleRemoveClick = () => {
    console.log({ docId, invoice });
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
