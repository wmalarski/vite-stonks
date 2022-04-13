import { Doc } from "@/services/DocApi";
import { useSpreadSheetApi } from "@/services/SpreadSheetApi";
import { ReactElement } from "react";
import { useQuery } from "react-query";

type Props = {
  doc: Doc;
};

export const InvoicesList = ({ doc }: Props): ReactElement => {
  const spreadSheetApi = useSpreadSheetApi();
  const { data } = useQuery(
    spreadSheetApi.keyList(doc.sheet_id),
    spreadSheetApi.list,
    { refetchOnWindowFocus: false }
  );

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
