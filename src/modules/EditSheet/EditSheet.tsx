import { Sheet, useSheetApi } from "@/services/SheetApi";
import { Button, Form, message, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";
import { SheetForm } from "../SheetForm/SheetForm";

type Props = {
  sheet: Sheet;
};

export const EditSheet = ({ sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "sheet.edit" });

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<Sheet>();

  const sheetApi = useSheetApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(sheetApi.update, {
    onSuccess: () => {
      client.invalidateQueries(sheetApi.listKey());
      client.invalidateQueries(sheetApi.key(sheet.id));
      setIsOpen(false);
    },
    onError: () => {
      message.error(t("error"));
    },
  });

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleOkClick = async () => {
    try {
      const values = await form.validateFields();
      mutate({ ...sheet, ...values });
    } catch (info) {
      console.error("Validate Failed:", info);
    }
  };

  const handleCancelClick = () => {
    setIsOpen(false);
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
        <SheetForm form={form} initialValues={sheet} />
      </Modal>
    </>
  );
};
