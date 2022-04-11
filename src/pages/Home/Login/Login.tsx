import { GoogleOutlined } from "@ant-design/icons";
import { useProviderLink } from "@nhost/react";
import { Button, Divider, Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./Login.css";

export const Login = (): ReactElement => {
  const { t } = useTranslation("common");

  const { google } = useProviderLink();

  // supabase.auth.signIn({
  //   // provider can be 'github', 'google', 'gitlab', and more
  //   provider: 'github'
  // })

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <Typography.Title>{t("pageTitle")}</Typography.Title>
        <Divider style={{ marginTop: 0 }} />
        <Button icon={<GoogleOutlined />} type="link" href={google}>
          {t("loginGoogle")}
        </Button>
      </div>
    </div>
  );
};
