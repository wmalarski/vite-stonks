import { CreateReportArgs } from "@/services/ReportApi";
import { DatePicker, Form, FormInstance, InputNumber } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  form: FormInstance<CreateReportArgs>;
  initialValues?: CreateReportArgs;
};

export const ReportForm = ({ form, initialValues }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <Form
      form={form}
      layout="vertical"
      name="sheet_form"
      initialValues={initialValues}
    >
      <Form.Item
        label={t("report.form.date")}
        name="date"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.date"),
            }),
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label={t("report.form.pensionContribution")}
        name="pensionContribution"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.pensionContribution"),
            }),
          },
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label={t("report.form.disabilityPension")}
        name="disabilityPension"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.disabilityPension"),
            }),
          },
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label={t("report.form.sicknessContribution")}
        name="sicknessContribution"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.sicknessContribution"),
            }),
          },
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label={t("report.form.accidentPremium")}
        name="accidentPremium"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.accidentPremium"),
            }),
          },
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>
    </Form>
  );
};
