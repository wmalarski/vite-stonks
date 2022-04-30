import { Invoice, useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Button, Form, message, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";
import { InvoiceForm } from "../InvoiceForm/InvoiceForm";

type Props = {
  invoice: Invoice;
  sheet: Sheet;
};

export const EditInvoice = ({ invoice, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "invoice.edit" });

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<Invoice>();

  const invoiceApi = useInvoiceApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(invoiceApi.update, {
    onSuccess: (update) => {
      client.invalidateQueries(invoiceApi.listKey(sheet.id));
      client.invalidateQueries(invoiceApi.key(update.id));
    },
    onError: () => {
      message.error(t("error"));
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
      mutate(update);
    } catch (info) {
      console.error("Validate Failed:", info);
    }
  };

  return (
    <>
      <Button onClick={handleOpenClick}>{t("button")}</Button>
      <Modal
        cancelText={t("cancel")}
        okButtonProps={{ loading: isLoading }}
        okText={t("save")}
        onCancel={handleCancelClick}
        onOk={handleOkClick}
        title={t("title")}
        visible={isOpen}
      >
        <InvoiceForm form={form} initialValues={invoice} />
      </Modal>
    </>
  );
};
