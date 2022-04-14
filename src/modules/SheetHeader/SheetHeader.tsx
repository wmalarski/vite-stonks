import { paths } from "@/navigation/paths";
import { Doc } from "@/services/DocApi";
import { PageHeader } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-location";
import { EditSheet } from "../EditSheet/EditSheet";
import { RemoveSheet } from "../RemoveSheet/RemoveSheet";

type Props = {
  doc: Doc;
};

export const SheetHeader = ({ doc }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const navigate = useNavigate();

  const handleRemoveSuccess = () => {
    navigate({ to: paths.home });
  };

  const handleBackClick = () => {
    navigate({ to: paths.home });
  };

  return (
    <PageHeader
      extra={[
        <EditSheet key="edit" doc={doc} />,
        <RemoveSheet key="remove" onSuccess={handleRemoveSuccess} doc={doc} />,
      ]}
      ghost={false}
      onBack={handleBackClick}
      subTitle={t("sheetSubtitle")}
      title={doc.name}
    />
  );
};
