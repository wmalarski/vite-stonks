import { useAuthApi } from "@/services/AuthApi";
import { GoogleOutlined } from "@ant-design/icons";
import { Button, Divider, message, Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import * as classes from "./Login.css";

export const Login = (): ReactElement => {
  const { t } = useTranslation("common");

  const authApi = useAuthApi();
  const { mutate } = useMutation(authApi.signIn, {
    onError: () => {
      message.error(t("login.error"));
    },
  });

  const handleClick = () => {
    mutate();
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <Typography.Title>{t("pageTitle")}</Typography.Title>
        <Divider style={{ marginTop: 0 }} />
        <Button icon={<GoogleOutlined />} onClick={handleClick}>
          {t("login.google")}
        </Button>
      </div>
    </div>
  );
};
