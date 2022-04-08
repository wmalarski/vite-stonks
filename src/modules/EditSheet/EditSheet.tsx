import { Sheet, UpdateSheetArgs, useSheetApi } from "@/services/SheetApi";
import { Button, Form, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";
import { SheetForm } from "../SheetForm/SheetForm";

type Props = {
  sheet: Sheet;
};

export const EditSheet = ({ sheet }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<UpdateSheetArgs>();

  const sheetApi = useSheetApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(sheetApi.update, {
    onSuccess: () => {
      client.invalidateQueries(sheetApi.listKey());
      client.invalidateQueries(sheetApi.key(sheet.id));
      setIsOpen(false);
    },
  });

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleOkClick = async () => {
    try {
      const values = await form.validateFields();
      mutate({ ...values, id: sheet.id });
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
        {t("editSheet")}
      </Button>
      <Modal
        okButtonProps={{ loading: isLoading }}
        okText={t("saveSheetButton")}
        onCancel={handleCancelClick}
        onOk={handleOkClick}
        title={t("editSheetTitle")}
        visible={isOpen}
      >
        <SheetForm form={form} initialValues={sheet} />
      </Modal>
    </>
  );
};
