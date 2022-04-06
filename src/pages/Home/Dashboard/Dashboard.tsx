import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { Button, Layout } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-location";
import * as classes from "./Dashboard.css";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

export const Dashboard = (): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <Layout className={classes.layout}>
      <Layout.Header className={classes.header}>
        <Header />
      </Layout.Header>
      <Layout>
        <Layout.Sider className={classes.side}>
          <Sidebar />
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
