import { CreateSheetArgs } from "@/services/SheetApi";
import { Form, FormInstance, Input } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  form: FormInstance<CreateSheetArgs>;
};

export const CreateSheetForm = ({ form }: Props): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <Form form={form} layout="vertical" name="create_sheet">
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
