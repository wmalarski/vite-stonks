import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

export const Login = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("Login")}</p>
      <div>{data}</div>
    </div>
  );
};
