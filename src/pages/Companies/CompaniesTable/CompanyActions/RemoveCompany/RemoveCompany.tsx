import { Company, useCompanyApi } from "@/services/CompanyApi";
import { Sheet } from "@/services/SheetApi";
import { Button } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  company: Company;
  sheet: Sheet;
};

export const RemoveCompany = ({ company, sheet }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "company" });

  const companyApi = useCompanyApi();
  const client = useQueryClient();
  const { mutate, isLoading } = useMutation(companyApi.delete, {
    onSuccess: () => {
      client.invalidateQueries(companyApi.listKey(sheet.id));
    },
  });

  const handleRemoveClick = () => {
    mutate(company.id);
  };

  return (
    <Button danger loading={isLoading} onClick={handleRemoveClick}>
      {t("remove")}
    </Button>
  );
};
