import { SignOutButton } from "@/modules/SignOutButton/SignOutButton";
import { paths } from "@/navigation/paths";
import { BarsOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import * as classes from "./SheetSidebar.css";

type Props = {
  sheetId: number;
};

export const SheetSidebar = ({ sheetId }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "navigation" });

  const location = useLocation();

  return (
    <div className={classes.container}>
      <Menu mode="vertical" selectedKeys={[location.pathname]} theme="light">
        <Menu.Item key={paths.sheet(sheetId)} icon={<BarsOutlined />}>
          <Link to={paths.sheet(sheetId)}>{t("details")}</Link>
        </Menu.Item>
        <Menu.Item key={paths.settings(sheetId)} icon={<SettingOutlined />}>
          <Link to={paths.settings(sheetId)}>{t("settings")}</Link>
        </Menu.Item>
      </Menu>
      <SignOutButton />
    </div>
  );
};
