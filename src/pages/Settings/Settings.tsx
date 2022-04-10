import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const Settings = (): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("Settings")}</p>
    </div>
  );
};
