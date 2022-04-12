import { SheetForm } from "@/modules/SheetForm/SheetForm";
import { CreateDocArgs, useDocApi } from "@/services/DocApi";
import { supabase } from "@/services/supabase";
import { Button, Form, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

export const CreateSheet = (): ReactElement => {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<CreateDocArgs>();

  const docApi = useDocApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(docApi.create, {
    onSuccess: () => {
      client.invalidateQueries(docApi.listKey());
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
        <SheetForm form={form} />
      </Modal>
    </>
  );
};
