import { Layout } from "antd";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import * as classes from "./Dashboard.css";
import { Header } from "./Header/Header";

export const Dashboard = (): ReactElement => {
  return (
    <Layout className={classes.layout}>
      <Layout.Header className={classes.header}>
        <Header />
      </Layout.Header>
      <Outlet />
    </Layout>
  );
};
