import { Col, Row, Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./Header.css";
import { HeaderBreadcrumb } from "./HeaderBreadcrumb/HeaderBreadcrumb";

export const Header = (): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <Row align="middle" className={classes.container}>
      <Col className={classes.logo}>
        <Typography.Title className={classes.title} level={3}>
          {t("pageTitle")}
        </Typography.Title>
      </Col>
      <Col>
        <HeaderBreadcrumb />
      </Col>
    </Row>
  );
};
