import { Invoice } from "@/services/InvoiceApi";
import { Col, Row } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  invoice: Invoice;
};

export const PreviewSummary = ({ invoice }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "preview" });
  return (
    <Row>
      <Col span={12}>
        <p>{t("PreviewSummary")}</p>
      </Col>
      <Col span={12}>
        <div>{invoice.address}</div>
      </Col>
      <Col span={12}>
        <div>{invoice.address}</div>
      </Col>
      <Col span={12} />
      <Col span={12}>
        <div>{invoice.address}</div>
      </Col>
      <Col span={12} />
    </Row>
  );
};
