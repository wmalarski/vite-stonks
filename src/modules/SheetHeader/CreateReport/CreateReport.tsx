import { ReportForm, ReportFormArgs } from "@/modules/ReportForm/ReportForm";
import { useReportApi } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { supabase } from "@/services/supabase";
import { Button, Form, message, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  onSuccess: () => void;
  sheet: Sheet;
};

export const CreateReport = ({ onSuccess, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "report.create" });

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<ReportFormArgs>();

  const client = useQueryClient();
  const reportApi = useReportApi();

  const { mutate, isLoading } = useMutation(reportApi.create, {
    onSuccess: () => {
      client.invalidateQueries(reportApi.listKey(sheet.id));
      onSuccess();
      setIsOpen(false);
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
      const user = supabase.auth.user();
      if (!user) return;
      const create = await form.validateFields();
      mutate({ ...create, user_id: user.id, sheet_id: sheet.id });
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
        <ReportForm form={form} />
      </Modal>
    </>
  );
};
