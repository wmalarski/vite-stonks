import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, useMatch } from "react-location";

export const Invoices = (): ReactElement => {
  const { t } = useTranslation("common");

  const { params } = useMatch<LocationGenerics>();
  const sheetId = Number(params.sheetId);

  return (
    <div>
      <p>{t("Invoices")}</p>
      <div>{sheetId}</div>
      <Link<LocationGenerics> to={paths.invoice(sheetId, "1")}>Invoice</Link>
    </div>
  );
};
