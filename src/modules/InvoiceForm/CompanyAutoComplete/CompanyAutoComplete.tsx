import { useDebounce } from "@/hooks/useDebounce";
import { useCompanyApi } from "@/services/CompanyApi";
import { Sheet } from "@/services/SheetApi";
import { Form, FormInstance, Select } from "antd";
import { ReactElement, useState } from "react";
import { useQuery } from "react-query";

type Props = {
  sheet: Sheet;
  form: FormInstance<{ company_id: number }>;
};

export const CompanyAutoComplete = ({ sheet, form }: Props): ReactElement => {
  const [query, setQuery] = useState("");
  const companyId = Form.useWatch("company_id", form);

  const companyApi = useCompanyApi();
  const { data } = useQuery(
    companyApi.searchKey(sheet.id, query),
    companyApi.search,
    { keepPreviousData: true }
  );

  const handleSearch = useDebounce(async (value: string) => {
    setQuery(value);
  }, 500);

  const handleChange = (selectedId: number) => {
    form.setFieldsValue({ company_id: selectedId });
  };

  const options = data?.companies.map((company) => ({
    value: company.id,
    label: company.company,
  }));

  return (
    <Select
      value={companyId}
      onChange={handleChange}
      onSearch={handleSearch}
      options={options}
      showSearch
    />
  );
};
