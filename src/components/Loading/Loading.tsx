import { Spin } from "antd";
import { ReactElement } from "react";
import * as classes from "./Loading.css";

type Props = {
  variant?: keyof typeof classes.variant;
};

export const Loading = ({ variant = "default" }: Props): ReactElement => {
  return (
    <div className={classes.variant[variant]}>
      <Spin size="large" data-testid="spin" />
    </div>
  );
};
