import { EditSheet } from "@/modules/EditSheet/EditSheet";
import { paths } from "@/navigation/paths";
import { Sheet, useSheetApi } from "@/services/SheetApi";
import { Button, List } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-location";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  sheet: Sheet;
};

export const SheetsListItem = ({ sheet }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const sheetApi = useSheetApi();
  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(sheetApi.delete, {
    onSuccess: () => {
      client.invalidateQueries(sheetApi.listKey());
    },
  });

  const handleRemoveClick = () => {
    mutate(sheet.id);
  };

  return (
    <List.Item
      actions={[
        <EditSheet key="edit" sheet={sheet} />,
        <Button
          danger
          key="remove"
          loading={isLoading}
          onClick={handleRemoveClick}
        >
          {t("removeSheet")}
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={<Link to={paths.sheet(sheet.id)}>{sheet.name}</Link>}
        description={sheet.createdAt}
      />
    </List.Item>
  );
};
