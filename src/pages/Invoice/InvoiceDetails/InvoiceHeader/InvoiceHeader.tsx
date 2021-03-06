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
  invoice: Invoice;
  sheet: Sheet;
};

export const InvoiceHeader = ({ invoice, sheet }: Props): ReactElement => {
  const navigate = useNavigate();

  const handleRemoveSuccess = () => {
    navigate(paths.sheet(sheet.id));
  };

  const handleCopySuccess = (copy: Invoice) => {
    navigate(paths.invoice(sheet.id, copy.id));
  };

  const handleBackClick = () => {
    navigate(paths.sheet(sheet.id));
  };

  return (
    <PageHeader
      extra={[
        <EditInvoice invoice={invoice} key="edit" sheet={sheet} />,
        <CopyInvoice
          invoice={invoice}
          key="copy"
          onSuccess={handleCopySuccess}
          sheet={sheet}
        />,
        <RemoveInvoice
          key="remove"
          onSuccess={handleRemoveSuccess}
          sheet={sheet}
          invoice={invoice}
        />,
      ]}
      ghost={false}
      onBack={handleBackClick}
      subTitle={invoice.name}
      title={invoice.title}
    />
  );
};
