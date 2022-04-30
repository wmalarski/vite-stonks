import { ErrorView } from "@/components/ErrorView/ErrorView";
import { useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Table } from "antd";
import { ReactElement, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import * as classes from "./InvoicesList.css";
import { useColumns } from "./InvoicesList.utils";

const PageSize = 10;

type Props = {
  sheet: Sheet;
};

export const InvoicesList = ({ sheet }: Props): ReactElement => {
  const [page, setPage] = useState(1);
  const pagination = { offset: (page - 1) * PageSize, limit: PageSize };

  const client = useQueryClient();
  const invoiceApi = useInvoiceApi();
  const { data, status, isLoading, refetch } = useQuery(
    invoiceApi.listKey(sheet.id, pagination),
    invoiceApi.list,
    {
      refetchOnWindowFocus: false,
      onSuccess: (result) => {
        result.invoices.forEach((invoice) => {
          client.setQueryData(invoiceApi.key(invoice.id), invoice);
        });
      },
    }
  );

  const columns = useColumns({ sheet });

  const handleRefreshClick = () => {
    refetch();
  };

  if (status === "error") {
    return <ErrorView onRefreshClick={handleRefreshClick} />;
  }

  return (
    <Table
      bordered
      rowKey={(invoice) => invoice.name}
      className={classes.table}
      columns={columns}
      dataSource={data?.invoices}
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
