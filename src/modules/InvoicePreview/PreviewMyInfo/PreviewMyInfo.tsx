import { Sheet } from "@/services/SheetApi";
import Typography from "antd/lib/typography";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  sheet: Sheet;
};

export const PreviewMyInfo = ({ sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "preview" });
  return (
    <div>
      <Typography.Title level={5}>{t("seller")}</Typography.Title>
      <Typography.Paragraph>{sheet.company}</Typography.Paragraph>
      <Typography.Paragraph>{sheet.address1}</Typography.Paragraph>
      <Typography.Paragraph>{sheet.address2}</Typography.Paragraph>
      <Typography.Paragraph>{sheet.nip}</Typography.Paragraph>
    </div>
  );
};
