import { Invoice } from "@/services/InvoiceApi";
import { Form, FormInstance, Input } from "antd";
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
      form={form}
      layout="vertical"
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
        label={t("dateLabel")}
        name="date"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("dateLabel") }),
          },
        ]}
      >
        <Input />
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
        label={t("priceLabel")}
        name="price"
        rules={[
          {
            required: true,
            message: t("fieldRequired", { label: t("priceLabel") }),
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
    </Form>
  );
};
