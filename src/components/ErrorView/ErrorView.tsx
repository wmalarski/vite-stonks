import { Button, Result } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  onRefreshClick?: () => void;
};

export const ErrorView = ({ onRefreshClick }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "title" });

  return (
    <Result
      status="error"
      title={t("title")}
      subTitle={t("message")}
      extra={
        <Button type="primary" key="back" onClick={onRefreshClick}>
          {t("reload")}
        </Button>
      }
    />
  );
};
