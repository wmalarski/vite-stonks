import { LocationGenerics } from "@/navigation/location";
import { useAuthApi } from "@/services/AuthApi";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMatches } from "react-location";
import { useMutation } from "react-query";
import * as classes from "./Sidebar.css";

export const Sidebar = (): ReactElement => {
  const { t } = useTranslation("common");

  const authApi = useAuthApi();
  const { mutate } = useMutation(authApi.signOut);

  const matches = useMatches<LocationGenerics>();

  const sidebarMatch = matches
    .reverse()
    .find((match) => match.route?.meta?.sidebar);

  const handleSignOutClick = () => {
    mutate();
  };

  return (
    <div className={classes.container}>
      <div>
        {sidebarMatch &&
          sidebarMatch.route.meta?.sidebar?.(sidebarMatch.params)}
      </div>
      <div className={classes.bottom}>
        <Button
          icon={<LogoutOutlined />}
          type="text"
          onClick={handleSignOutClick}
          block
        >
          {t("navigation.logout")}
        </Button>
      </div>
    </div>
  );
};
