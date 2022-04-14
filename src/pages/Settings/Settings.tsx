import { SheetHeader } from "@/modules/SheetHeader/SheetHeader";
import { LocationGenerics } from "@/navigation/location";
import { useDocApi } from "@/services/DocApi";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMatch } from "react-location";
import { useQuery } from "react-query";

export const Settings = (): ReactElement | null => {
  const { t } = useTranslation("common");

  const { params } = useMatch<LocationGenerics>();
  const id = Number(params.docId);

  const docApi = useDocApi();
  const { data } = useQuery(docApi.key(id), docApi.get);

  if (!data) return null;

  return (
    <div>
      <SheetHeader doc={data} />
      <p>{t("Settings")}</p>
    </div>
  );
};
