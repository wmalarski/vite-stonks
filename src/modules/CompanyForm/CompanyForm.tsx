import { Company } from "@/services/CompanyApi";
import { Form, FormInstance, Input } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  form: FormInstance<Company>;
  initialValues?: Company;
};

export const CompanyForm = ({ form, initialValues }: Props): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <Form
      form={form}
      initialValues={initialValues}
      labelCol={{ span: 6 }}
      layout="horizontal"
      name="company_form"
      wrapperCol={{ span: 18 }}
    >
      <Form.Item
        label={t("company.form.company")}
        name="company"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("company.form.company"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("company.form.address1")}
        name="address1"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("company.form.address1"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("company.form.address2")}
        name="address2"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("company.form.address2"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("company.form.nip")}
        name="nip"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("company.form.nip"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
