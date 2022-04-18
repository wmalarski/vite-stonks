import { Invoice } from "@/services/InvoiceApi";
import { Profile } from "@/services/ProfileApi";
import { formatDate } from "@/utils/format";
import { Typography } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import * as classes from "./PreviewHeader.css";

type Props = {
  invoice: Invoice;
  profile: Profile;
};

export const PreviewHeader = ({ invoice, profile }: Props): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <div className={classes.layout}>
      <Typography.Text>
        {t("previewHeader", {
          city: profile.city,
          date: formatDate(invoice.date.toDate()),
        })}
      </Typography.Text>
    </div>
  );
};
