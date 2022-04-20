import { paths } from "@/navigation/paths";
import { BankOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-location";

export const SheetsSidebar = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "navigation" });

  const location = useLocation();

  return (
    <Menu
      mode="vertical"
      selectedKeys={[location.current.pathname]}
      theme="light"
    >
      <Menu.Item key={paths.home} icon={<BankOutlined />}>
        <Link to={paths.home}>{t("sheets")}</Link>
      </Menu.Item>
    </Menu>
  );
};
