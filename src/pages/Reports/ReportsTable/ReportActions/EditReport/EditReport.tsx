import { ReportForm, ReportFormArgs } from "@/modules/ReportForm/ReportForm";
import { Report, useReportApi } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { Button, Form, message, Modal } from "antd";
import moment from "moment";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  sheet: Sheet;
  report: Report;
};

export const EditReport = ({ sheet, report }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "report.edit" });

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<ReportFormArgs>();

  const client = useQueryClient();
  const reportApi = useReportApi();

  const { mutate, isLoading } = useMutation(reportApi.update, {
    onSuccess: () => {
      client.invalidateQueries(reportApi.listKey(sheet.id));
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
      const update = await form.validateFields();
      mutate({ ...update, date: update.date.toISOString(), id: report.id });
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
        <ReportForm
          form={form}
          initialValues={{ ...report, date: moment(report.date) }}
        />
      </Modal>
    </>
  );
};
