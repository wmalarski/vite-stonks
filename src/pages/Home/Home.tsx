import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-location";

export const Home = (): ReactElement => {
  const { t } = useTranslation("common");

  const location = useLocation();

  console.log({ location });

  return (
    <div>
      <p>{t("Home")}</p>
      <Link<LocationGenerics> to={paths.home}>Home</Link>
      <Outlet />
    </div>
  );
};
