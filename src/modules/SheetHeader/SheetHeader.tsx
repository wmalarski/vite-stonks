import { paths } from "@/navigation/paths";
import { Sheet } from "@/services/SheetApi";
import { PageHeader } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-location";
import { EditSheet } from "../EditSheet/EditSheet";
import { RemoveSheet } from "../RemoveSheet/RemoveSheet";

type Props = {
  sheet: Sheet;
};

export const SheetHeader = ({ sheet }: Props): ReactElement => {
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
        <EditSheet key="edit" sheet={sheet} />,
        <RemoveSheet
          key="remove"
          onSuccess={handleRemoveSuccess}
          sheet={sheet}
        />,
      ]}
      ghost={false}
      onBack={handleBackClick}
      subTitle={t("sheetSubtitle")}
      title={sheet.name}
    />
  );
};
