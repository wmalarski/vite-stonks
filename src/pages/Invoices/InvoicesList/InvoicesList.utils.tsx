import { Invoice } from "@/services/SpreadSheetApi";
import { ColumnsType } from "antd/lib/table";
import { useTranslation } from "react-i18next";
import { InvoiceActions } from "./InvoiceActions/InvoiceActions";

type UseColumnsArgs = {
  docId: number;
};

export const useColumns = ({ docId }: UseColumnsArgs): ColumnsType<Invoice> => {
  const { t } = useTranslation("common");

  const common = { align: "center" } as const;

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
      ellipsis: true,
    },
    // {
    //   ...common,
    //   title: t("invoiceCompany"),
    //   children: [
    //     {
    //       ...common,
    //       title: t("invoiceName"),
    //       dataIndex: "company",
    //       key: "company",
    //     },
    //     {
    //       ...common,
    //       title: t("invoiceAddress"),
    //       dataIndex: "address",
    //       key: "address",
    //     },
    //     {
    //       ...common,
    //       title: t("invoiceNip"),
    //       dataIndex: "nip",
    //       key: "nip",
    //     },
    //   ],
    // },
    // {
    //   ...common,
    //   title: t("invoiceData"),
    //   children: [
    //     {
    //       ...common,
    //       dataIndex: "price",
    //       key: "price",
    //       title: t("invoicePrice"),
    //       width: 60,
    //     },
    //     {
    //       ...common,
    //       title: t("invoiceHours"),
    //       dataIndex: "hours",
    //       key: "hours",
    //       width: 60,
    //     },
    //     {
    //       ...common,
    //       title: t("invoiceSummary"),
    //       dataIndex: "summary",
    //       key: "summary",
    //     },
    //   ],
    // },
    {
      align: "center",
      title: t("invoiceActions"),
      key: "actions",
      render: (_, record) => <InvoiceActions invoice={record} docId={docId} />,
    },
  ];
};
