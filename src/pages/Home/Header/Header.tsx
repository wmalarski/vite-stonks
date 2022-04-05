import { Col, Row, Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { HeaderBreadcrumb } from "./HeaderBreadcrumb/HeaderBreadcrumb";

type Props = {
  data?: string;
};

export const Header = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <Row align="middle" style={{ backgroundColor: "white", height: "100%" }}>
      <Col style={{ padding: "0 32px" }}>
        <Typography.Title style={{ margin: 0 }} level={2}>
          {t("pageTitle")}
        </Typography.Title>
      </Col>
      <Col>
        <HeaderBreadcrumb />
      </Col>
    </Row>
  );
};
