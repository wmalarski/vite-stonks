import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-location";

type Props = {
  data?: string;
};

export const Sheet = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("Sheet")}</p>
      <Link<LocationGenerics> to={paths.settings("1")}>Settings</Link>
      <Link<LocationGenerics> to={paths.invoice("1", "1")}>Invoice</Link>
      <div>{data}</div>
      <Outlet />
    </div>
  );
};
