import { Invoice } from "@/services/InvoiceApi";
import { Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  invoice: Invoice;
};

export const PreviewCompanyInfo = ({ invoice }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "preview" });
  return (
    <div>
      <Typography.Title level={5}>{t("recipient")}</Typography.Title>
      <Typography.Paragraph>{invoice.company.company}</Typography.Paragraph>
      <Typography.Paragraph>{invoice.company.address1}</Typography.Paragraph>
      <Typography.Paragraph>{invoice.company.address2}</Typography.Paragraph>
      <Typography.Paragraph>{invoice.company.nip}</Typography.Paragraph>
    </div>
  );
};
