import { useAuthApi } from "@/services/AuthApi";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import * as classes from "./SignOutButton.css";

export const SignOutButton = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "navigation" });

  const authApi = useAuthApi();
  const { mutate } = useMutation(authApi.signOut);

  const handleSignOutClick = () => {
    mutate();
  };

  return (
    <div className={classes.bottom}>
      <Button
        icon={<LogoutOutlined />}
        type="text"
        onClick={handleSignOutClick}
        block
      >
        {t("logout")}
      </Button>
    </div>
  );
};
