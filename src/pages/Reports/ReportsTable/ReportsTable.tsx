import { ErrorView } from "@/components/ErrorView/ErrorView";
import { useReportApi } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { Table } from "antd";
import { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import * as classes from "./ReportsTable.css";
import { useColumns } from "./ReportsTable.utils";

type Props = {
  sheet: Sheet;
};

const PageSize = 10;

export const ReportsTable = ({ sheet }: Props): ReactElement => {
  const [page, setPage] = useState(1);
  const pagination = { offset: (page - 1) * PageSize, limit: PageSize };

  const reportApi = useReportApi();
  const { data, status, isLoading, refetch } = useQuery(
    reportApi.listKey(sheet.id, pagination),
    reportApi.list
  );

  const handleRefreshClick = () => {
    refetch();
  };

  const columns = useColumns({ sheet });

  if (status === "error") {
    return <ErrorView onRefreshClick={handleRefreshClick} />;
  }

  return (
    <Table
      bordered
      rowKey={(report) => report.date.toString()}
      className={classes.table}
      columns={columns}
      dataSource={data?.reports}
      loading={isLoading}
      size="small"
      pagination={{
        current: page,
        disabled: (data?.count ?? 0) < 1,
        onChange: setPage,
        total: data?.count,
      }}
    />
  );
};
