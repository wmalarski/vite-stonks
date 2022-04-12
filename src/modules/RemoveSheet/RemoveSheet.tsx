import { Doc, useDocApi } from "@/services/DocApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  onSuccess?: () => void;
  doc: Doc;
};

export const RemoveSheet = ({ onSuccess, doc }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const docApi = useDocApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(docApi.delete, {
    onSuccess: () => {
      client.invalidateQueries(docApi.listKey());
      onSuccess?.();
    },
  });

  const handleRemoveClick = () => {
    mutate(doc.id);
  };

  return (
    <Button danger loading={isLoading} onClick={handleRemoveClick}>
      {t("removeSheet")}
    </Button>
  );
};
