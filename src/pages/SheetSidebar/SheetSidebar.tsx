import { paths } from "@/navigation/paths";
import { BarsOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-location";

type Props = {
  sheetId: string;
};

export const SheetSidebar = ({ sheetId }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const location = useLocation();
  const id = Number(sheetId);

  return (
    <Menu
      mode="vertical"
      selectedKeys={[location.current.pathname]}
      theme="light"
    >
      <Menu.Item key={paths.sheet(id)} icon={<BarsOutlined />}>
        <Link to={paths.sheet(id)}>{t("sheetDetails")}</Link>
      </Menu.Item>
      <Menu.Item key={paths.settings(id)} icon={<SettingOutlined />}>
        <Link to={paths.settings(id)}>{t("settings")}</Link>
      </Menu.Item>
    </Menu>
  );
};
