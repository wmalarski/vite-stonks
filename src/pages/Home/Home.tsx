import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { Button, Layout, Menu } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-location";
import { Header } from "./Header/Header";

export const Home = (): ReactElement => {
  const { t } = useTranslation("common");

  const location = useLocation();

  return (
    <Layout
      style={{ height: "100vh", overflow: "clip", backgroundColor: "white" }}
    >
      <Layout.Header
        style={{
          padding: 0,
          borderBottom: "solid 1px #f0f1f2",
        }}
      >
        <Header />
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <Menu theme="light" mode="vertical" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
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
      <Layout.Footer>footer</Layout.Footer>
    </Layout>
  );
};
