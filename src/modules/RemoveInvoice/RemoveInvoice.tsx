import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

export const RemoveInvoice = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("RemoveInvoice")}</p>
      <div>{data}</div>
    </div>
  );
};
