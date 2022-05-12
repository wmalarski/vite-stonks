import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { formatDate } from "@/utils/format";
import { ColumnsType } from "antd/lib/table";
import { useTranslation } from "react-i18next";
import { InvoiceActions } from "./InvoiceActions/InvoiceActions";
import { InvoiceTitle } from "./InvoiceTitle/InvoiceTitle";

type UseColumnsArgs = {
  sheet: Sheet;
};

export const useColumns = ({ sheet }: UseColumnsArgs): ColumnsType<Invoice> => {
  const { t } = useTranslation("common", { keyPrefix: "invoices" });

  return [
    {
      dataIndex: "date",
      key: "date",
      title: t("date"),
      width: 90,
      render: formatDate,
    },
    {
      title: t("number"),
      dataIndex: "name",
      key: "name",
      width: 90,
    },
    {
      title: t("title"),
      dataIndex: "title",
      key: "title",
      width: "100%",
      render: (_, record) => (
        <InvoiceTitle invoice={record} key={`title-${record.id}`} />
      ),
    },
    {
      title: t("hours"),
      dataIndex: "hours",
      key: "hours",
      width: 90,
    },
    {
      title: t("price"),
      dataIndex: "price",
      key: "price",
      width: 90,
    },
    {
      title: t("summary"),
      key: "summary",
      width: 90,
      render: (_, invoice) => invoice.hours * invoice.price,
    },
    {
      title: t("actions"),
      key: "actions",
      render: (_, record) => (
        <InvoiceActions
          key={`actions-${record.id}`}
          invoice={record}
          sheet={sheet}
        />
      ),
      colSpan: 1,
    },
  ];
};
