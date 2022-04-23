import { Layout } from "antd";
import { ReactElement, ReactNode } from "react";
import * as classes from "./ContentLayout.css";

type Props = {
  children: ReactNode;
  sidebar: ReactNode;
};

export const ContentLayout = ({ children, sidebar }: Props): ReactElement => {
  return (
    <Layout>
      <Layout.Sider className={classes.side}>{sidebar}</Layout.Sider>
      <Layout.Content className={classes.content}>{children}</Layout.Content>
    </Layout>
  );
};
