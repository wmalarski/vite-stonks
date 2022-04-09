import { EditSheet } from "@/modules/EditSheet/EditSheet";
import { RemoveSheet } from "@/modules/RemoveSheet/RemoveSheet";
import { paths } from "@/navigation/paths";
import { Sheet } from "@/services/SheetApi";
import { List } from "antd";
import { ReactElement } from "react";
import { Link } from "react-location";

type Props = {
  sheet: Sheet;
};

export const SheetsListItem = ({ sheet }: Props): ReactElement => {
  return (
    <List.Item
      actions={[
        <EditSheet key="edit" sheet={sheet} />,
        <RemoveSheet key="remove" sheet={sheet} />,
      ]}
    >
      <List.Item.Meta
        title={<Link to={paths.sheet(sheet.id)}>{sheet.name}</Link>}
        description={sheet.createdAt}
      />
    </List.Item>
  );
};
