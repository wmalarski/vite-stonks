import { LocationGenerics } from "@/navigation/location";
import { LogoutOutlined } from "@ant-design/icons";
import { useSignOut } from "@nhost/react";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMatches } from "react-location";
import * as classes from "./Sidebar.css";

export const Sidebar = (): ReactElement => {
  const { t } = useTranslation("common");

  const { signOut } = useSignOut();

  const matches = useMatches<LocationGenerics>();

  const sidebarMatch = matches
    .reverse()
    .find((match) => match.route?.meta?.sidebar);

  return (
    <div className={classes.container}>
      <div>
        {sidebarMatch &&
          sidebarMatch.route.meta?.sidebar?.(sidebarMatch.params)}
      </div>
      <div className={classes.bottom}>
        <Button icon={<LogoutOutlined />} type="text" onClick={signOut} block>
          {t("logout")}
        </Button>
      </div>
    </div>
  );
};
