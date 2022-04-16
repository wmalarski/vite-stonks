import { Doc } from "@/services/DocApi";
import { useInvoiceApi } from "@/services/InvoiceApi";
import { Table } from "antd";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import * as classes from "./InvoicesList.css";
import { useColumns } from "./InvoicesList.utils";

type Props = {
  doc: Doc;
};

export const InvoicesList = ({ doc }: Props): ReactElement => {
  const spreadSheetApi = useInvoiceApi();
  const { data, isLoading } = useQuery(
    spreadSheetApi.keyList(doc.sheet_id),
    spreadSheetApi.list,
    { refetchOnWindowFocus: false }
  );

  const columns = useColumns({ docId: doc.id });

  return (
    <Table
      bordered
      className={classes.table}
      columns={columns}
      dataSource={data}
      loading={isLoading}
      size="small"
    />
  );
};
