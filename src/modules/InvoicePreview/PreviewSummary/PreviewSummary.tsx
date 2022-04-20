import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

export const PreviewSummary = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "preview" });
  return (
    <div>
      <p>{t("PreviewSummary")}</p>
      <div>{data}</div>
    </div>
  );
};
