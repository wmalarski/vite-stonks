import { Spin } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./Loading.css";

export const Loading = (): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div className={classes.container}>
      <Spin size="large" />
    </div>
  );
};
