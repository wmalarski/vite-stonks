import { SheetForm } from "@/modules/SheetForm/SheetForm";
import { CreateSheetArgs, useSheetApi } from "@/services/SheetApi";
import { supabase } from "@/services/supabase";
import { Button, Form, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

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
      const user = supabase.auth.user();
      if (!user) return;
      const values = await form.validateFields();
      mutate({ ...values, user_id: user.id });
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
        {t("sheet.create.button")}
      </Button>
      <Modal
        okButtonProps={{ loading: isLoading }}
        okText={t("sheet.create.save")}
        onCancel={handleCancelClick}
        onOk={handleOkClick}
        title={t("sheet.create.title")}
        visible={isOpen}
      >
        <SheetForm form={form} />
      </Modal>
    </>
  );
};
