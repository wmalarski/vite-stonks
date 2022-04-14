import { paths } from "@/navigation/paths";
import { Invoice } from "@/services/SpreadSheetApi";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-location";

type Props = {
  docId: number;
  invoice: Invoice;
};

export const InvoiceTitle = ({ docId, invoice }: Props): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <Link to={paths.invoice(docId, invoice.id)}>{t("invoiceDetails")}</Link>
  );
};
