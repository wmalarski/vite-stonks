import { Company } from "@/services/CompanyApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  company: Company;
  sheet: Sheet;
};

export const CompanyActions = ({ company }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("CompanyActions")}</p>
      <div>{company.address1}</div>
    </div>
  );
};
