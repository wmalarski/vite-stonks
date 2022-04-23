import { Breadcrumb } from "antd";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

export const HeaderBreadcrumb = (): ReactElement => {
  const breadcrumbs = useBreadcrumbs();

  const filtered = breadcrumbs.filter((match) => match);

  console.log({ breadcrumbs });

  return (
    <Breadcrumb>
      {filtered.map(({ match, breadcrumb }) => (
        <Breadcrumb.Item key={match.pathname}>
          <Link to={match.pathname}>{breadcrumb}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
