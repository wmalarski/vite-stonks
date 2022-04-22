import { Sheet } from "@/services/SheetApi";
import { Button, Form, Input } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  initialValues?: Sheet;
  isLoading: boolean;
  onFinish: (sheet: Partial<Sheet>) => void;
};

export const SheetSettingsForm = ({
  initialValues,
  isLoading,
  onFinish,
}: Props): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <Form
      initialValues={initialValues}
      labelCol={{ span: 6 }}
      layout="horizontal"
      name="sheet_form"
      onFinish={onFinish}
      wrapperCol={{ span: 18 }}
    >
      <Form.Item
        label={t("settings.form.account")}
        name="account"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("settings.form.account"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("settings.form.address1")}
        name="address1"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("settings.form.address1"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("settings.form.address2")}
        name="address2"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("settings.form.address2"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("settings.form.bank")}
        name="bank"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("settings.form.bank"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("settings.form.city")}
        name="city"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("settings.form.city"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("settings.form.company")}
        name="company"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("settings.form.company"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t("settings.form.nip")}
        name="nip"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("settings.form.nip"),
            }),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={isLoading} type="primary" htmlType="submit">
          {t("settings.form.save")}
        </Button>
      </Form.Item>
    </Form>
  );
};
