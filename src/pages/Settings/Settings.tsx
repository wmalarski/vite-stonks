import { SheetHeader } from "@/modules/SheetHeader/SheetHeader";
import { LocationGenerics } from "@/navigation/location";
import { useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMatch } from "react-location";
import { useQuery } from "react-query";

export const Settings = (): ReactElement | null => {
  const { t } = useTranslation("common", { keyPrefix: "settings" });

  const { params } = useMatch<LocationGenerics>();
  const id = Number(params.sheetId);

  const sheetApi = useSheetApi();
  const { data } = useQuery(sheetApi.key(id), sheetApi.get);

  if (!data) return null;

  return (
    <div>
      <SheetHeader sheet={data} />
      <p>{t("Settings")}</p>
    </div>
  );
};
