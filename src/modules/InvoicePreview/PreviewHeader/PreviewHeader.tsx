import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { formatDate } from "@/utils/format";
import { Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./PreviewHeader.css";

type Props = {
  invoice: Invoice;
  sheet: Sheet;
};

export const PreviewHeader = ({ invoice, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "preview" });

  return (
    <div className={classes.layout}>
      <Typography.Text>
        {t("header", {
          city: sheet.city,
          date: formatDate(invoice.date),
        })}
      </Typography.Text>
    </div>
  );
};
