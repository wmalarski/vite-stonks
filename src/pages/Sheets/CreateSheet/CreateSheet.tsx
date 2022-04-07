import { CreateSheetArgs, useSheetApi } from "@/services/SheetApi";
import { Button, Form, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";
import { CreateSheetForm } from "./CreateSheetForm/CreateSheetForm";

export const CreateSheet = (): ReactElement => {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<CreateSheetArgs>();

  const sheetApi = useSheetApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(sheetApi.create, {
    onSuccess: () => {
      client.invalidateQueries(sheetApi.listKey());
      setIsOpen(false);
    },
  });

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleOkClick = async () => {
    try {
      const values = await form.validateFields();
      mutate(values);
    } catch (info) {
      console.error("Validate Failed:", info);
    }
  };

  const handleCancelClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenClick} type="primary">
        {t("addSheet")}
      </Button>
      <Modal
        okButtonProps={{ loading: isLoading }}
        okText={t("addButton")}
        onCancel={handleCancelClick}
        onOk={handleOkClick}
        title={t("addSheetTitle")}
        visible={isOpen}
      >
        <CreateSheetForm form={form} />
      </Modal>
    </>
  );
};
