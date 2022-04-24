import { useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  index: number;
  onSuccess?: () => void;
  sheet: Sheet;
};

export const RemoveInvoice = ({
  index,
  onSuccess,
  sheet,
}: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "invoice" });

  const invoiceApi = useInvoiceApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(invoiceApi.delete, {
    onSuccess: () => {
      client.invalidateQueries(invoiceApi.listKey(sheet.sheet_id));
      onSuccess?.();
    },
  });

  const handleRemoveClick = () => {
    mutate({ id: sheet.sheet_id, index: index });
  };

  return (
    <Button danger loading={isLoading} onClick={handleRemoveClick}>
      {t("remove")}
    </Button>
  );
};
