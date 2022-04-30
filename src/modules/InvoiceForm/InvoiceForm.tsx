import { Invoice } from "@/services/InvoiceApi";
import { DatePicker, Form, FormInstance, Input, InputNumber } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

// export type Invoice

type Props = {
  form: FormInstance<Invoice>;
  initialValues?: Invoice;
};

export const InvoiceForm = ({ form, initialValues }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      form={form}
      layout="horizontal"
      name="sheet_form"
      initialValues={initialValues}
    >
      <Form.Item
        label={t("invoice.form.address1")}
        name="address1"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("invoice.form.address1"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("invoice.form.address2")}
        name="address2"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("invoice.form.address2"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("invoice.form.company")}
        name="company"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("invoice.form.company"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("invoice.form.nip")}
        name="nip"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", { label: t("invoice.form.nip") }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("invoice.form.name")}
        name="name"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", { label: t("invoice.form.name") }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("invoice.form.title")}
        name="title"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("invoice.form.title"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("invoice.form.price")}
        name="price"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("invoice.form.price"),
            }),
          },
        ]}
      >
        <InputNumber min={0} step={0} />
      </Form.Item>
      <Form.Item
        label={t("invoice.form.hours")}
        name="hours"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("invoice.form.hours"),
            }),
          },
        ]}
      >
        <InputNumber min={0} step={0} />
      </Form.Item>
      <Form.Item
        label={t("invoice.form.date")}
        name="date"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("invoice.form.date"),
            }),
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
    </Form>
  );
};
