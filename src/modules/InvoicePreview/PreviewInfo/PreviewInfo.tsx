import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { formatMoment } from "@/utils/format";
import { Col, Radio, Row, Space, Typography } from "antd";
import moment from "moment";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./PreviewInfo.css";

type Props = {
  invoice: Invoice;
  sheet: Sheet;
};

export const PreviewInfo = ({ invoice, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "preview" });

  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <Typography.Title level={4}>
          {t("info", { name: invoice.name })}
        </Typography.Title>
      </div>
      <Row gutter={10}>
        <Col span={6} className={classes.label}>
          <Typography.Text>{t("payment")}</Typography.Text>
        </Col>
        <Col span={6}>
          <Radio.Group value="transaction">
            <Space direction="vertical">
              <Radio value="money">{t("money")}</Radio>
              <Radio value="transaction">{t("transaction")}</Radio>
            </Space>
          </Radio.Group>
        </Col>
        <Col span={12}>
          <Row gutter={10}>
            <Col span={8} className={classes.label}>
              <Typography.Text>{t("paymentDeadline")}</Typography.Text>
            </Col>
            <Col span={14}>
              <Typography.Text>
                {formatMoment(moment(invoice.date).add(15, "days"))}
              </Typography.Text>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={8} className={classes.label}>
              <Typography.Text>{t("bank")}</Typography.Text>
            </Col>
            <Col span={14}>
              <Typography.Text>{sheet.bank}</Typography.Text>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={8} className={classes.label}>
              <Typography.Text>{t("account")}</Typography.Text>
            </Col>
            <Col span={14}>
              <Typography.Text>{sheet.account}</Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
