import { useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Table } from "antd";
import { ReactElement, useState } from "react";
import { useQuery } from "react-query";
import * as classes from "./InvoicesList.css";
import { useColumns } from "./InvoicesList.utils";

const PageSize = 10;

type Props = {
  sheet: Sheet;
};

export const InvoicesList = ({ sheet }: Props): ReactElement => {
  const invoiceApi = useInvoiceApi();

  const [page, setPage] = useState(1);
  const pagination = { offset: (page - 1) * PageSize, limit: PageSize };

  const { data, isLoading } = useQuery(
    invoiceApi.listKey(sheet.id, pagination),
    invoiceApi.list,
    { refetchOnWindowFocus: false }
  );

  const columns = useColumns({ sheet });

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
