import { Invoice } from "@/services/InvoiceApi";
import { pricePLN } from "@/utils/pricePln";
import { Col, Row, Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./PreviewSummary.css";

type Props = {
  invoice: Invoice;
};

export const PreviewSummary = ({ invoice }: Props): ReactElement => {
  const { t, i18n } = useTranslation("common", { keyPrefix: "preview" });

  const text = i18n.language === "pl" ? pricePLN(invoice.summary) : "";

  return (
    <Row>
      <Col span={6}>
        <Typography.Text>{t("toPay")}</Typography.Text>
      </Col>
      <Col span={6} className={classes.right}>
        <Typography.Text>
          {t("amount", { amount: invoice.summary })}
        </Typography.Text>
      </Col>
      <Col span={12}>
        <Typography.Text>{text}</Typography.Text>
      </Col>
      <Col span={6}>
        <Typography.Text>{t("payed")}</Typography.Text>
      </Col>
      <Col span={6} className={classes.right}>
        <Typography.Text> {t("amount", { amount: 0 })}</Typography.Text>
      </Col>
      <Col span={12} />
      <Col span={6}>
        <Typography.Text>{t("leftToPay")}</Typography.Text>
      </Col>
      <Col span={6} className={classes.right}>
        <Typography.Text>
          {t("amount", { amount: invoice.summary })}
        </Typography.Text>
      </Col>
    </Row>
  );
};
