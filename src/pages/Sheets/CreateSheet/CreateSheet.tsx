import { SheetForm } from "@/modules/SheetForm/SheetForm";
import { Sheet, useSheetApi } from "@/services/SheetApi";
import { supabase } from "@/services/supabase";
import { Button, Form, message, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

export const CreateSheet = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "sheet.create" });

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<Sheet>();

  const sheetApi = useSheetApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(sheetApi.create, {
    onSuccess: () => {
      client.invalidateQueries(sheetApi.listKey());
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
        {t("button")}
      </Button>
      <Modal
        cancelText={t("cancel")}
        okButtonProps={{ loading: isLoading }}
        okText={t("save")}
        onCancel={handleCancelClick}
        onOk={handleOkClick}
        title={t("title")}
        visible={isOpen}
      >
        <SheetForm form={form} />
      </Modal>
    </>
  );
};
