import { Sheet, useSheetApi } from "@/services/SheetApi";
import { Button, message } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  onSuccess?: () => void;
  sheet: Sheet;
};

export const RemoveSheet = ({ onSuccess, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "sheet.remove" });

  const sheetApi = useSheetApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(sheetApi.delete, {
    onSuccess: () => {
      client.invalidateQueries(sheetApi.listKey());
      onSuccess?.();
    },
    onError: () => {
      message.error(t("error"));
    },
  });

  const handleRemoveClick = () => {
    mutate(sheet.id);
  };

  return (
    <Button danger loading={isLoading} onClick={handleRemoveClick}>
      {t("button")}
    </Button>
  );
};
