import { CopyInvoice } from "@/modules/CopyInvoice/CopyInvoice";
import { EditInvoice } from "@/modules/EditInvoice/EditInvoice";
import { RemoveInvoice } from "@/modules/RemoveInvoice/RemoveInvoice";
import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/InvoiceApi";
import { Sheet } from "@/services/SheetApi";
import { PageHeader } from "antd";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  index: number;
  invoice: Invoice;
  sheet: Sheet;
};

export const InvoiceHeader = ({
  index,
  invoice,
  sheet,
}: Props): ReactElement => {
  const navigate = useNavigate();

  const handleRemoveSuccess = () => {
    navigate(paths.sheet(sheet.id));
  };

  const handleCopySuccess = (copyIndex: number) => {
    navigate(paths.invoice(sheet.id, copyIndex));
  };

  const handleBackClick = () => {
    navigate(paths.sheet(sheet.id));
  };

  return (
    <PageHeader
      extra={[
        <EditInvoice
          key="edit"
          index={index}
          invoice={invoice}
          sheet={sheet}
        />,
        <CopyInvoice
          invoice={invoice}
          key="copy"
          onSuccess={handleCopySuccess}
          sheet={sheet}
        />,
        <RemoveInvoice
          index={index}
          key="remove"
          onSuccess={handleRemoveSuccess}
          sheet={sheet}
        />,
      ]}
      ghost={false}
      onBack={handleBackClick}
      subTitle={invoice.name}
      title={invoice.title}
    />
  );
};
