import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { Button, PageHeader } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-location";

type Props = {
  invoice: Invoice;
  sheet: Sheet;
};

export const InvoiceHeader = ({ invoice, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common");

  const navigate = useNavigate();

  const handleRemoveClick = () => {
    navigate({ to: paths.home });
  };

  const handleCopyClick = () => {
    navigate({ to: paths.home });
  };

  const handleBackClick = () => {
    navigate({ to: paths.sheet(sheet.id) });
  };

  const handleEditClick = () => {
    //
  };

  return (
    <PageHeader
      extra={[
        <Button key="edit" onClick={handleEditClick}>
          {t("invoiceEdit")}
        </Button>,
        <Button key="copy" onClick={handleCopyClick}>
          {t("invoiceCopy")}
        </Button>,
        <Button key="remove" danger onClick={handleRemoveClick}>
          {t("invoiceRemove")}
        </Button>,
      ]}
      ghost={false}
      onBack={handleBackClick}
      subTitle={invoice.name}
      title={invoice.title}
    />
  );
};
