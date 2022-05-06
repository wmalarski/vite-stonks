import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { DatePicker, Form, FormInstance, Input, InputNumber } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { CompanyAutoComplete } from "./CompanyAutoComplete/CompanyAutoComplete";

export type InvoiceFormArgs = Omit<Invoice, "date"> & { date: moment.Moment };

type Props = {
  form: FormInstance<InvoiceFormArgs>;
  initialValues?: InvoiceFormArgs;
  sheet: Sheet;
};

export const InvoiceForm = ({
  form,
  initialValues,
  sheet,
}: Props): ReactElement => {
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
        label={t("invoice.form.company")}
        name="company_id"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("invoice.form.company"),
            }),
          },
        ]}
      >
        <CompanyAutoComplete form={form} sheet={sheet} />
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
        <InputNumber min={0} step={1} />
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
        <InputNumber min={0} step={1} />
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
