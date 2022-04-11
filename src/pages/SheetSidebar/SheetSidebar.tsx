import { paths } from "@/navigation/paths";
import { BarsOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-location";

type Props = {
  docId: string;
};

export const SheetSidebar = ({ docId }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const location = useLocation();
  const id = Number(docId);

  return (
    <Menu
      mode="vertical"
      selectedKeys={[location.current.pathname]}
      theme="light"
    >
      <Menu.Item key={paths.doc(id)} icon={<BarsOutlined />}>
        <Link to={paths.doc(id)}>{t("sheetDetails")}</Link>
      </Menu.Item>
      <Menu.Item key={paths.settings(id)} icon={<SettingOutlined />}>
        <Link to={paths.settings(id)}>{t("settings")}</Link>
      </Menu.Item>
    </Menu>
  );
};
