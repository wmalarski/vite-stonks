import { useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Table } from "antd";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import * as classes from "./InvoicesList.css";
import { useColumns } from "./InvoicesList.utils";

type Props = {
  sheet: Sheet;
};

export const InvoicesList = ({ sheet }: Props): ReactElement => {
  const spreadSheetApi = useInvoiceApi();
  const { data, isLoading } = useQuery(
    spreadSheetApi.keyList(sheet.sheet_id),
    spreadSheetApi.list,
    { refetchOnWindowFocus: false }
  );

  const columns = useColumns({ sheetId: sheet.id });

  console.log({ data });

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
