import { Invoice } from "@/services/SpreadSheetApi";
import { ColumnsType } from "antd/lib/table";
import { useTranslation } from "react-i18next";
import { InvoiceActions } from "./InvoiceActions/InvoiceActions";
import { InvoiceTitle } from "./InvoiceTitle/InvoiceTitle";

type UseColumnsArgs = {
  docId: number;
};

export const useColumns = ({ docId }: UseColumnsArgs): ColumnsType<Invoice> => {
  const { t } = useTranslation("common");

  return [
    {
      title: t("invoiceId"),
      dataIndex: "id",
      key: "id",
      width: 30,
    },
    {
      dataIndex: "date",
      key: "date",
      title: t("invoiceDate"),
      width: 90,
    },
    {
      title: t("invoiceNumber"),
      dataIndex: "name",
      key: "name",
      width: 90,
    },
    {
      title: t("invoiceTitle"),
      dataIndex: "title",
      key: "title",
      width: "100%",
      // ellipsis: true,
      render: (_, record) => <InvoiceTitle invoice={record} docId={docId} />,
    },
    {
      title: t("invoiceActions"),
      key: "actions",
      render: (_, record) => <InvoiceActions invoice={record} docId={docId} />,
      colSpan: 1,
    },
  ];
};
