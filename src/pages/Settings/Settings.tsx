import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

export const Settings = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("Settings")}</p>
      <div>{data}</div>
    </div>
  );
};
