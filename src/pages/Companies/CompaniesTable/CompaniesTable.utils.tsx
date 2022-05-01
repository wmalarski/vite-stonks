import { Company } from "@/services/CompanyApi";
import { Sheet } from "@/services/SheetApi";
import { ColumnsType } from "antd/lib/table";
import { useTranslation } from "react-i18next";
import { CompanyActions } from "./CompanyActions/CompanyActions";

type UseColumnsArgs = {
  sheet: Sheet;
};

export const useColumns = ({ sheet }: UseColumnsArgs): ColumnsType<Company> => {
  const { t } = useTranslation("common", { keyPrefix: "companies" });

  return [
    {
      dataIndex: "address1",
      key: "address1",
      title: t("address1"),
    },
    {
      title: t("address2"),
      dataIndex: "address2",
      key: "address2",
    },
    {
      title: t("company"),
      dataIndex: "company",
      key: "company",
    },
    {
      title: t("nip"),
      dataIndex: "nip",
      key: "nip",
      width: 90,
    },
    {
      title: t("actions"),
      key: "actions",
      render: (_, report) => (
        <CompanyActions
          key={`actions-${report.id}`}
          company={report}
          sheet={sheet}
        />
      ),
      colSpan: 1,
    },
  ];
};
