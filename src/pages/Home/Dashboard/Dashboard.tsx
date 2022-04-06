import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { Button, Layout, Menu } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-location";
import * as classes from "./Dashboard.css";
import { Header } from "./Header/Header";

export const Dashboard = (): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <Layout className={classes.layout}>
      <Layout.Header className={classes.header}>
        <Header />
      </Layout.Header>
      <Layout>
        <Layout.Sider className={classes.side}>
          <div className={classes.sideContent}>
            <Menu theme="light" mode="vertical" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            <div style={{ flexGrow: 1 }} />
            <Button type="text" block>
              Text Button
            </Button>
          </div>
        </Layout.Sider>
        <Layout.Content>
          main content
          <Button>Hello</Button>
          <div>
            <p>{t("Home")}</p>
            <Link<LocationGenerics> to={paths.home}>Home</Link>
            <Outlet />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
