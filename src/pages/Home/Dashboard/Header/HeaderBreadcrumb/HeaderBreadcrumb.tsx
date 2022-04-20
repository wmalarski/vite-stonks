import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { Breadcrumb } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, useMatches } from "react-location";

export const HeaderBreadcrumb = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "navigation" });

  const matches = useMatches<LocationGenerics>();

  const filtered = matches.filter((match) => match.route?.meta?.breadcrumb);

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={paths.home}>{t("home")}</Link>
      </Breadcrumb.Item>
      {filtered.map((match) => (
        <Breadcrumb.Item key={match.pathname}>
          <Link to={match.pathname}>
            {match.route.meta?.breadcrumb?.(match.params)}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
