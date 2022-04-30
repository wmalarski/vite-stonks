import { Invoice } from "@/services/InvoiceApi";
import { Descriptions } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  invoice: Invoice;
};

export const PreviewTable = ({ invoice }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "preview" });
  return (
    <Descriptions layout="vertical" bordered column={6}>
      <Descriptions.Item label={t("lp")}>1</Descriptions.Item>
      <Descriptions.Item label={t("title")}>{invoice.title}</Descriptions.Item>
      <Descriptions.Item label={t("unit")}>{t("hour")}</Descriptions.Item>
      <Descriptions.Item label={t("count")}>{invoice.hours}</Descriptions.Item>
      <Descriptions.Item label={t("price")}>{invoice.price}</Descriptions.Item>
      <Descriptions.Item label={t("summary")}>
        {invoice.hours * invoice.price}
      </Descriptions.Item>
    </Descriptions>
  );
};
