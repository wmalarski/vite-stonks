import { EditSheet } from "@/modules/EditSheet/EditSheet";
import { RemoveSheet } from "@/modules/RemoveSheet/RemoveSheet";
import { paths } from "@/navigation/paths";
import { Doc } from "@/services/DocApi";
import { List } from "antd";
import { ReactElement } from "react";
import { Link } from "react-location";

type Props = {
  doc: Doc;
};

export const SheetsListItem = ({ doc }: Props): ReactElement => {
  return (
    <List.Item
      actions={[
        <EditSheet key="edit" doc={doc} />,
        <RemoveSheet key="remove" doc={doc} />,
      ]}
    >
      <List.Item.Meta
        title={<Link to={paths.doc(doc.id)}>{doc.name}</Link>}
        description={doc.created_at}
      />
    </List.Item>
  );
};
