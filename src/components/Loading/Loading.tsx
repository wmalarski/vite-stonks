import { Spin } from "antd";
import { ReactElement } from "react";
import * as classes from "./Loading.css";

export const Loading = (): ReactElement => {
  return (
    <div className={classes.container}>
      <Spin size="large" data-testid="spin" />
    </div>
  );
};
