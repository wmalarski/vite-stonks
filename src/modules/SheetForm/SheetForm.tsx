import { Sheet } from "@/services/SheetApi";
import { Form, FormInstance, Input } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  form: FormInstance<Sheet>;
  initialValues?: Sheet;
};

export const SheetForm = ({ form, initialValues }: Props): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <Form
      form={form}
      initialValues={initialValues}
      labelCol={{ span: 6 }}
      layout="horizontal"
      name="sheet_form"
      wrapperCol={{ span: 18 }}
    >
      <Form.Item
        label={t("sheet.form.name")}
        name="name"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("settings.form.name"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("sheet.form.account")}
        name="account"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("sheet.form.account"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("sheet.form.address1")}
        name="address1"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("sheet.form.address1"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("sheet.form.address2")}
        name="address2"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("sheet.form.address2"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("sheet.form.bank")}
        name="bank"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("sheet.form.bank"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("sheet.form.city")}
        name="city"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("sheet.form.city"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("sheet.form.company")}
        name="company"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("sheet.form.company"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("sheet.form.nip")}
        name="nip"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("sheet.form.nip"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
