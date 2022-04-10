import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const Invoice = (): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("Invoice")}</p>
    </div>
  );
};
