import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

export const PreviewNotes = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("PreviewNotes")}</p>
      <div>{data}</div>
    </div>
  );
};
