import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

export const PreviewTable = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "preview" });
  return (
    <div>
      <p>{t("PreviewTable")}</p>
      <div>{data}</div>
    </div>
  );
};
