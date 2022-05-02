import { CompanyForm } from "@/modules/CompanyForm/CompanyForm";
import { Company, useCompanyApi } from "@/services/CompanyApi";
import { Sheet } from "@/services/SheetApi";
import { Button, Form, message, Modal } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  onSuccess?: (company: Company) => void;
  sheet: Sheet;
};

export const CreateCompany = ({ onSuccess, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "company.create" });

  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<Company>();

  const companyApi = useCompanyApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(companyApi.create, {
    onSuccess: (company) => {
      client.invalidateQueries(companyApi.listKey(sheet.id));
      onSuccess?.(company);
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
      const create = await form.validateFields();
      mutate({ ...create, sheet_id: sheet.id });
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
        <CompanyForm form={form} />
      </Modal>
    </>
  );
};
