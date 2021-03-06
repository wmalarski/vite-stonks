import { SheetForm } from "@/modules/SheetForm/SheetForm";
import { Sheet, useSheetApi } from "@/services/SheetApi";
import { Button, Form, message } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";
import * as classes from "./SheetSettings.css";

type Props = {
  sheet: Sheet;
};

export const SheetSettings = ({ sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "settings" });

  const [form] = Form.useForm<Sheet>();

  const sheetApi = useSheetApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(sheetApi.update, {
    onSuccess: (data) => {
      client.invalidateQueries(sheetApi.listKey());
      client.invalidateQueries(sheetApi.key(data.id));
    },
    onError: () => {
      message.error(t("error"));
    },
  });

  const handleSaveClick = async () => {
    try {
      const values = await form.validateFields();
      mutate({ ...sheet, ...values });
    } catch (info) {
      console.error("Validate Failed:", info);
    }
  };

  return (
    <div className={classes.container}>
      <SheetForm initialValues={sheet} form={form} />
      <Button loading={isLoading} onClick={handleSaveClick}>
        {t("save")}
      </Button>
    </div>
  );
};
