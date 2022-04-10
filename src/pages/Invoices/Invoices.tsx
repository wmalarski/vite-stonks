import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, useMatch } from "react-location";
import { useQuery } from "react-query";
import { InvoicesList } from "./InvoicesList/InvoicesList";

export const Invoices = (): ReactElement => {
  const { t } = useTranslation("common");

  const { params } = useMatch<LocationGenerics>();
  const id = Number(params.sheetId);

  const sheetApi = useSheetApi();
  const { data } = useQuery(sheetApi.key(id), sheetApi.get);

  return (
    <div>
      <p>{t("Invoices")}</p>
      {data && <InvoicesList sheet={data} />}
      <Link<LocationGenerics> to={paths.invoice(id, "1")}>Invoice</Link>
    </div>
  );
};
