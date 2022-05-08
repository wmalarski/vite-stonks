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
      <Menu
        mode="vertical"
        selectedKeys={[location.pathname]}
        theme="light"
        items={[
          {
            key: paths.sheet(sheetId),
            icon: <BarsOutlined />,
            label: <Link to={paths.sheet(sheetId)}>{t("details")}</Link>,
          },
          {
            key: paths.reports(sheetId),
            icon: <SettingOutlined />,
            label: <Link to={paths.reports(sheetId)}>{t("reports")}</Link>,
          },
          {
            key: paths.companies(sheetId),
            icon: <SettingOutlined />,
            label: <Link to={paths.companies(sheetId)}>{t("companies")}</Link>,
          },
          {
            key: paths.settings(sheetId),
            icon: <SettingOutlined />,
            label: <Link to={paths.settings(sheetId)}>{t("settings")}</Link>,
          },
        ]}
      />
      <SignOutButton />
    </div>
  );
};
