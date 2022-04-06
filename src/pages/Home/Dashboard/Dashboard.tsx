import { Layout } from "antd";
import { ReactElement } from "react";
import { Outlet } from "react-location";
import * as classes from "./Dashboard.css";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

export const Dashboard = (): ReactElement => {
  return (
    <Layout className={classes.layout}>
      <Layout.Header className={classes.header}>
        <Header />
      </Layout.Header>
      <Layout>
        <Layout.Sider className={classes.side}>
          <Sidebar />
        </Layout.Sider>
        <Layout.Content className={classes.content}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
