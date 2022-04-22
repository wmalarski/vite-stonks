import { Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./PreviewNotes.css";

export const PreviewNotes = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "preview" });
  return (
    <div className={classes.container}>
      <Typography.Text strong>{t("notes")}</Typography.Text>
      <Typography.Text>{t("note")}</Typography.Text>
    </div>
  );
};
