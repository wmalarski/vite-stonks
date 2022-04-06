import { LogoutOutlined } from "@ant-design/icons";
import { useSignOut } from "@nhost/react";
import { Button, Menu } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./Sidebar.css";

export const Sidebar = (): ReactElement => {
  const { t } = useTranslation("common");

  const { signOut } = useSignOut();

  return (
    <div className={classes.container}>
      <Menu theme="light" mode="vertical" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      <div className={classes.bottom}>
        <Button icon={<LogoutOutlined />} type="text" onClick={signOut} block>
          {t("logout")}
        </Button>
      </div>
    </div>
  );
};
