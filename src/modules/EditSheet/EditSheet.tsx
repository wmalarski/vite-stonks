import { Doc, UpdateDocArgs, useDocApi } from "@/services/DocApi";
import { Button, Form, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";
import { SheetForm } from "../SheetForm/SheetForm";

type Props = {
  doc: Doc;
};

export const EditSheet = ({ doc }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<UpdateDocArgs>();

  const docApi = useDocApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(docApi.update, {
    onSuccess: () => {
      client.invalidateQueries(docApi.listKey());
      client.invalidateQueries(docApi.key(doc.id));
      setIsOpen(false);
    },
  });

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleOkClick = async () => {
    try {
      const values = await form.validateFields();
      mutate({ ...values, id: doc.id });
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
        <SheetForm form={form} initialValues={doc} />
      </Modal>
    </>
  );
};
