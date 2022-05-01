import { Report } from "@/services/ReportApi";
import { DatePicker, Form, FormInstance, InputNumber } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export type ReportFormArgs = Omit<Report, "date"> & { date: moment.Moment };

type Props = {
  form: FormInstance<ReportFormArgs>;
  initialValues?: ReportFormArgs;
};

export const ReportForm = ({ form, initialValues }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <Form
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 12 }}
      form={form}
      layout="horizontal"
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
        name="pension_contribution"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.pensionContribution"),
            }),
          },
        ]}
      >
        <InputNumber min={0} step={0.01} />
      </Form.Item>
      <Form.Item
        label={t("report.form.disabilityPension")}
        name="disability_pension"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.disabilityPension"),
            }),
          },
        ]}
      >
        <InputNumber min={0} step={0.01} />
      </Form.Item>
      <Form.Item
        label={t("report.form.sicknessContribution")}
        name="sickness_contribution"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.sicknessContribution"),
            }),
          },
        ]}
      >
        <InputNumber min={0} step={0.01} />
      </Form.Item>
      <Form.Item
        label={t("report.form.accidentPremium")}
        name="accident_premium"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.accidentPremium"),
            }),
          },
        ]}
      >
        <InputNumber min={0} step={0.01} />
      </Form.Item>
      <Form.Item
        label={t("report.form.healthContributions")}
        name="health_contributions"
        rules={[
          {
            required: true,
            message: t("form.fieldRequired", {
              label: t("report.form.healthContributions"),
            }),
          },
        ]}
      >
        <InputNumber min={0} step={0.01} />
      </Form.Item>
    </Form>
  );
};
