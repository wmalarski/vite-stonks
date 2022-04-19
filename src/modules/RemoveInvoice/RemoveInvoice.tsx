import { Invoice, useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  invoice: Invoice;
  onSuccess?: () => void;
  sheet: Sheet;
};

export const RemoveInvoice = ({
  invoice,
  onSuccess,
  sheet,
}: Props): ReactElement => {
  const { t } = useTranslation("common");

  const invoiceApi = useInvoiceApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(invoiceApi.delete, {
    onSuccess: () => {
      client.invalidateQueries(invoiceApi.listKey(sheet.sheet_id));
      onSuccess?.();
    },
  });

  const handleRemoveClick = () => {
    mutate({ id: sheet.sheet_id, index: invoice.index });
  };

  return (
    <Button danger loading={isLoading} onClick={handleRemoveClick}>
      {t("invoice.remove")}
    </Button>
  );
};
