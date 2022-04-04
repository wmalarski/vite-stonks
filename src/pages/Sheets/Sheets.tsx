import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-location";

export const Sheets = (): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <div>
      <p>{t("Sheets")}</p>
      <Link<LocationGenerics> to={paths.sheet("1")}>Sheet 1</Link>
    </div>
  );
};
