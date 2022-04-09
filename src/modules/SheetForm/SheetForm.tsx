import { Form, FormInstance, Input } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type SheetFormArgs = {
  name: string;
  sheetId: string;
};

type Props = {
  form: FormInstance<SheetFormArgs>;
  initialValues?: SheetFormArgs;
};

export const SheetForm = ({ form, initialValues }: Props): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <Form
      form={form}
      layout="vertical"
      name="sheet_form"
      initialValues={initialValues}
    >
      <Form.Item
        label={t("nameLabel")}
        name="name"
        rules={[{ required: true, message: t("nameRequired") }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label={t("sheetIdLabel")} name="sheetId">
        <Input />
      </Form.Item>
    </Form>
  );
};