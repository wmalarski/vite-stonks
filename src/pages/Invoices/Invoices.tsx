import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { useDocApi } from "@/services/DocApi";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link, useMatch } from "react-location";
import { useQuery } from "react-query";
import { InvoicesList } from "./InvoicesList/InvoicesList";

export const Invoices = (): ReactElement => {
  const { t } = useTranslation("common");

  const { params } = useMatch<LocationGenerics>();
  const id = Number(params.docId);

  const docApi = useDocApi();
  const { data } = useQuery(docApi.key(id), docApi.get);

  return (
    <div>
      <p>{t("Invoices")}</p>
      {data && <InvoicesList doc={data} />}
      <Link<LocationGenerics> to={paths.invoice(id, "1")}>Invoice</Link>
    </div>
  );
};
