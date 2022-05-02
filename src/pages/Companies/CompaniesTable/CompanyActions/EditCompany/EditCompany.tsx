import { CompanyForm } from "@/modules/CompanyForm/CompanyForm";
import { Company, useCompanyApi } from "@/services/CompanyApi";
import { Sheet } from "@/services/SheetApi";
import { Button, Form, message, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  company: Company;
  sheet: Sheet;
};

export const EditCompany = ({ company, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "company.edit" });

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<Company>();

  const client = useQueryClient();
  const companyApi = useCompanyApi();
  const { mutate, isLoading } = useMutation(companyApi.update, {
    onSuccess: () => {
      client.invalidateQueries(companyApi.listKey(sheet.id));
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
      mutate({ ...update, id: company.id });
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
        <CompanyForm form={form} initialValues={company} />
      </Modal>
    </>
  );
};
