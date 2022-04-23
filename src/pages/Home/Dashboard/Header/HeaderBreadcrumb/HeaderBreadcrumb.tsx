import { Breadcrumb } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useBreadcrumbs, { BreadcrumbsRoute } from "use-react-router-breadcrumbs";

export const HeaderBreadcrumb = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "navigation" });

  const routes: BreadcrumbsRoute<string>[] = [
    { path: "/", breadcrumb: t("home") },
    { path: "/sheet/:sheetId", breadcrumb: t("sheet") },
    { path: "/sheet/:sheetId/settings", breadcrumb: t("settings") },
    { path: "/sheet/:sheetId/invoice/:invoiceId", breadcrumb: t("invoice") },
  ];

  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });

  return (
    <Breadcrumb>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Breadcrumb.Item key={match.pathname}>
          <Link to={match.pathname}>{breadcrumb}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
