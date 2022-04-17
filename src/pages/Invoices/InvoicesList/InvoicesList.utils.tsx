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
      render: formatDate,
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
      render: (_, record) => (
        <InvoiceTitle invoice={record} sheetId={sheet.id} />
      ),
    },
    {
      title: t("invoiceActions"),
      key: "actions",
      render: (_, record) => <InvoiceActions invoice={record} sheet={sheet} />,
      colSpan: 1,
    },
  ];
};
