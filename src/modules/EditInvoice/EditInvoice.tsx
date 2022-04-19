import { Invoice, useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Button, Form, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";
import { InvoiceForm } from "../InvoiceForm/InvoiceForm";

type Props = {
  invoice: Invoice;
  sheet: Sheet;
};

export const EditInvoice = ({ invoice, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<Invoice>();

  const invoiceApi = useInvoiceApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(invoiceApi.update, {
    onSuccess: () => {
      client.invalidateQueries(invoiceApi.listKey(sheet.sheet_id));
      client.invalidateQueries(invoiceApi.key(sheet.sheet_id, invoice.index));
    },
  });

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
  };

  const handleOkClick = async () => {
    try {
      const update = await form.validateFields();
      mutate({ update, id: sheet.sheet_id });
    } catch (info) {
      console.error("Validate Failed:", info);
    }
  };

  return (
    <>
      <Button onClick={handleOpenClick}>{t("invoice.edit.button")}</Button>
      <Modal
        okButtonProps={{ loading: isLoading }}
        okText={t("invoice.edit.save")}
        onCancel={handleCancelClick}
        onOk={handleOkClick}
        title={t("invoice.edit.title")}
        visible={isOpen}
      >
        <InvoiceForm form={form} initialValues={invoice} />
      </Modal>
    </>
  );
};
