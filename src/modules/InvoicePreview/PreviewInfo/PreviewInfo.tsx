import { Invoice } from "@/services/InvoiceApi";
import { Profile } from "@/services/ProfileApi";
import { formatDate } from "@/utils/format";
import { Col, Radio, Row, Space, Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./PreviewInfo.css";

type Props = {
  invoice: Invoice;
  profile: Profile;
};

export const PreviewInfo = ({ invoice, profile }: Props): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <Typography.Title level={4}>
          {t("preview.info", { name: invoice.name })}
        </Typography.Title>
      </div>
      <Row gutter={10}>
        <Col span={6} className={classes.label}>
          <Typography.Text>{t("preview.payment")}</Typography.Text>
        </Col>
        <Col span={6}>
          <Radio.Group value="transaction">
            <Space direction="vertical">
              <Radio value="money">{t("preview.money")}</Radio>
              <Radio value="transaction">{t("preview.transaction")}</Radio>
            </Space>
          </Radio.Group>
        </Col>
        <Col span={12}>
          <Row gutter={10}>
            <Col span={8} className={classes.label}>
              <Typography.Text>{t("preview.paymentDeadline")}</Typography.Text>
            </Col>
            <Col span={14}>
              <Typography.Text>
                {formatDate(invoice.date.clone().add(15, "days").toDate())}
              </Typography.Text>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={8} className={classes.label}>
              <Typography.Text>{t("preview.bank")}</Typography.Text>
            </Col>
            <Col span={14}>
              <Typography.Text>{profile.bank}</Typography.Text>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={8} className={classes.label}>
              <Typography.Text>{t("preview.account")}</Typography.Text>
            </Col>
            <Col span={14}>
              <Typography.Text>{profile.account}</Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
