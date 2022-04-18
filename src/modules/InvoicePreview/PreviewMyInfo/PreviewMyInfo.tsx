import { Profile } from "@/services/ProfileApi";
import Typography from "antd/lib/typography";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  profile: Profile;
};

export const PreviewMyInfo = ({ profile }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <Typography.Title level={5}>{t("previewSeller")}</Typography.Title>
      <Typography.Paragraph>{profile.company}</Typography.Paragraph>
      <Typography.Paragraph>{profile.address1}</Typography.Paragraph>
      <Typography.Paragraph>{profile.address2}</Typography.Paragraph>
      <Typography.Paragraph>{profile.nip}</Typography.Paragraph>
    </div>
  );
};
