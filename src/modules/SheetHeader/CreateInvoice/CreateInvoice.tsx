import { InvoiceForm } from "@/modules/InvoiceForm/InvoiceForm";
import { Invoice, useInvoiceApi } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Button, Form, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  onSuccess: (invoice: Invoice) => void;
  sheet: Sheet;
};

export const CreateInvoice = ({ onSuccess, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "invoice.create" });

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<Invoice>();

  const invoiceApi = useInvoiceApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(invoiceApi.create, {
    onSuccess: (invoice) => {
      client.invalidateQueries(invoiceApi.listKey(sheet.id));
      onSuccess(invoice);
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
      const create = await form.validateFields();
      mutate(create);
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
        <InvoiceForm form={form} />
      </Modal>
    </>
  );
};
