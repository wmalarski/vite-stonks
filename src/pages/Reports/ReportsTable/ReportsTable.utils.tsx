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
      title: t("number"),
      dataIndex: "name",
      key: "name",
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
