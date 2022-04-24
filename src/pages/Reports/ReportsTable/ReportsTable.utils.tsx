import { Report } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { formatDate } from "@/utils/format";
import { ColumnsType } from "antd/lib/table";
import { useTranslation } from "react-i18next";
import { ReportActions } from "./ReportActions/ReportActions";

type UseColumnsArgs = {
  sheet: Sheet;
};

export const useColumns = ({ sheet }: UseColumnsArgs): ColumnsType<Report> => {
  const { t } = useTranslation("common", { keyPrefix: "reports" });

  return [
    {
      dataIndex: "date",
      key: "date",
      title: t("date"),
      width: 90,
      render: formatDate,
    },
    {
      title: t("income"),
      dataIndex: "income",
      key: "income",
      width: 90,
    },
    {
      title: t("expenses"),
      dataIndex: "expenses",
      key: "expenses",
      width: 90,
    },
    {
      title: t("proceeds"),
      dataIndex: "proceeds",
      key: "proceeds",
      width: 90,
    },
    {
      title: t("pensionsSummary"),
      dataIndex: "pensionsSummary",
      key: "pensionsSummary",
      width: 90,
    },
    {
      title: t("base"),
      dataIndex: "base",
      key: "base",
      width: 90,
    },
    {
      title: t("tax"),
      dataIndex: "tax",
      key: "tax",
      width: 90,
    },
    {
      title: t("healthContributions"),
      dataIndex: "healthContributions",
      key: "healthContributions",
      width: 90,
    },
    {
      title: t("socialSecurity"),
      dataIndex: "socialSecurity",
      key: "socialSecurity",
      width: 90,
    },
    {
      title: t("actions"),
      key: "actions",
      render: (_, record, index) => (
        <ReportActions
          key={`actions-${index}`}
          index={index}
          report={record}
          sheet={sheet}
        />
      ),
      colSpan: 1,
    },
  ];
};
