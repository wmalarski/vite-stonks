import { Invoice } from "@/services/InvoiceApi";
import { Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  invoice: Invoice;
};

export const PreviewCompanyInfo = ({ invoice }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <Typography.Title level={5}>{t("preview.recipient")}</Typography.Title>
      <Typography.Paragraph>{invoice.company}</Typography.Paragraph>
      <Typography.Paragraph>{invoice.address}</Typography.Paragraph>
      <Typography.Paragraph>{invoice.address2}</Typography.Paragraph>
      <Typography.Paragraph>{invoice.nip}</Typography.Paragraph>
    </div>
  );
};
