import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useMatch } from "react-location";
import { useQuery } from "react-query";

export const Sheet = (): ReactElement => {
  const { t } = useTranslation("common");

  const { params } = useMatch<LocationGenerics>();
  const sheetId = Number(params.sheetId);

  const sheetApi = useSheetApi();
  const { data } = useQuery(sheetApi.key(sheetId), sheetApi.get);

  return (
    <div>
      <p>{t("Sheet")}</p>
      <Link<LocationGenerics> to={paths.settings(sheetId)}>Settings</Link>
      <Link<LocationGenerics> to={paths.invoice(sheetId, "1")}>Invoice</Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Outlet />
    </div>
  );
};
