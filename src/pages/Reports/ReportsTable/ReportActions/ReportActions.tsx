import { Report } from "@/services/ReportApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  index: number;
  report: Report;
  sheet: Sheet;
};

export const ReportActions = ({ index }: Props): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("ReportActions")}</p>
      <div>{index}</div>
    </div>
  );
};
