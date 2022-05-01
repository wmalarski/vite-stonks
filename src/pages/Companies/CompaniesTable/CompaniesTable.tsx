import { ErrorView } from "@/components/ErrorView/ErrorView";
import { useCompanyApi } from "@/services/CompanyApi";
import { Sheet } from "@/services/SheetApi";
import { Table } from "antd";
import { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import * as classes from "./CompaniesTable.ccs";
import { useColumns } from "./CompaniesTable.utils";

type Props = {
  sheet: Sheet;
};

const PageSize = 10;

export const CompaniesTable = ({ sheet }: Props): ReactElement => {
  const [page, setPage] = useState(1);
  const pagination = { offset: (page - 1) * PageSize, limit: PageSize };

  const companyApi = useCompanyApi();
  const { data, status, isLoading, refetch } = useQuery(
    companyApi.listKey(sheet.id, pagination),
    companyApi.list
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
      rowKey={(company) => company.id}
      className={classes.table}
      columns={columns}
      dataSource={data?.companies}
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
