import { Report, useReportApi } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  sheet: Sheet;
  report: Report;
};

export const RemoveReport = ({ sheet, report }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "report" });

  const reportApi = useReportApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(reportApi.delete, {
    onSuccess: () => {
      client.invalidateQueries(reportApi.listKey(sheet.id));
    },
  });

  const handleRemoveClick = () => {
    mutate(report.id);
  };

  return (
    <Button danger loading={isLoading} onClick={handleRemoveClick}>
      {t("remove")}
    </Button>
  );
};
