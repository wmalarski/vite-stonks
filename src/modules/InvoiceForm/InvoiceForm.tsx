import { Invoice } from "@/services/InvoiceApi";
import { DatePicker, Form, FormInstance, Input, InputNumber } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

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
        label={t("addressLabel")}
        name="address"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("addressLabel") }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("companyLabel")}
        name="company"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("companyLabel") }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("nipLabel")}
        name="nip"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("nipLabel") }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("invoiceNameLabel")}
        name="name"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("invoiceNameLabel") }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("titleLabel")}
        name="title"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("titleLabel") }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("priceLabel")}
        name="price"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("priceLabel") }),
          },
        ]}
      >
        <InputNumber min={0} step={0} />
      </Form.Item>
      <Form.Item
        label={t("hoursLabel")}
        name="hours"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("hoursLabel") }),
          },
        ]}
      >
        <InputNumber min={0} step={0} />
      </Form.Item>
      <Form.Item
        label={t("dateLabel")}
        name="date"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("dateLabel") }),
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
    </Form>
  );
};
