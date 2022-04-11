import { Doc } from "@/services/SheetApi";
import { useSpreadSheetApi } from "@/services/SpreadSheetApi";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

type Props = {
  doc: Doc;
};

export const InvoicesList = ({ doc }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const spreadSheetApi = useSpreadSheetApi();
  const { data, error } = useQuery(
    spreadSheetApi.key(doc.sheet_id),
    spreadSheetApi.get
  );

  console.log({ data, error });

  return (
    <div>
      <p>{t("InvoicesList")}</p>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
};
