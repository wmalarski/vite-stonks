import { Form, FormInstance, Input } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export type SheetFormArgs = {
  name: string;
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
        label={t("sheet.form.name")}
        name="name"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("sheet.form.name"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
