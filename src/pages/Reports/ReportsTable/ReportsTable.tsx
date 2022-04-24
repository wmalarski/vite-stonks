import { useReportApi } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { Table } from "antd";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import * as classes from "./ReportsTable.css";
import { useColumns } from "./ReportsTable.utils";

type Props = {
  sheet: Sheet;
};

export const ReportsTable = ({ sheet }: Props): ReactElement => {
  const reportApi = useReportApi();

  const { data, isLoading } = useQuery(
    reportApi.listKey(sheet.sheet_id),
    reportApi.list,
    { refetchOnWindowFocus: false }
  );

  const columns = useColumns({ sheet });

  return (
    <Table
      bordered
      rowKey={(report) => report.date.toString()}
      className={classes.table}
      columns={columns}
      dataSource={data}
      loading={isLoading}
      size="small"
    />
  );
};
