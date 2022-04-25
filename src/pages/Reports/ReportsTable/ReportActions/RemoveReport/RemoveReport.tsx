import { useReportApi } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  sheet: Sheet;
  index: number;
};

export const RemoveReport = ({ sheet, index }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "report" });

  const invoiceApi = useReportApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(invoiceApi.delete, {
    onSuccess: () => {
      client.invalidateQueries(invoiceApi.listKey(sheet.sheet_id));
    },
  });

  const handleRemoveClick = () => {
    mutate({ id: sheet.sheet_id, index });
  };

  return (
    <Button danger loading={isLoading} onClick={handleRemoveClick}>
      {t("remove")}
    </Button>
  );
};
