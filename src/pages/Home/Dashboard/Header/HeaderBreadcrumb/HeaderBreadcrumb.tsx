import { paths } from "@/navigation/paths";
import { Breadcrumb } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export const HeaderBreadcrumb = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "navigation" });

  // const matches = useMatches<LocationGenerics>();
  const breadcrumbs = useBreadcrumbs();

  const filtered = breadcrumbs.filter((match) => match);

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={paths.home}>{t("home")}</Link>
      </Breadcrumb.Item>
      {filtered.map(({ match, breadcrumb }) => (
        <Breadcrumb.Item key={match.pathname}>
          <Link to={match.pathname}>
            {breadcrumb}
            {/* {match.route.meta?.breadcrumb?.(match.params)} */}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
