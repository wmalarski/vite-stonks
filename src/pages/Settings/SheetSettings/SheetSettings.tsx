import { Sheet, useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as classes from "./SheetSettings.css";
import { SheetSettingsForm } from "./SheetSettingsForm/SheetSettingsForm";

type Props = {
  sheet: Sheet;
};

export const SheetSettings = ({ sheet }: Props): ReactElement => {
  const sheetApi = useSheetApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(sheetApi.update, {
    onSuccess: (data) => {
      client.invalidateQueries(sheetApi.listKey());
      client.invalidateQueries(sheetApi.key(data.id));
    },
  });

  const handleFinish = (update: Partial<Sheet>) => {
    mutate({ ...update, id: sheet.id });
  };

  return (
    <div className={classes.container}>
      <SheetSettingsForm
        initialValues={sheet}
        isLoading={isLoading}
        onFinish={handleFinish}
      />
    </div>
  );
};
