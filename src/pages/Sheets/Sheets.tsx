import { useDocApi } from "@/services/DocApi";
import { List, PageHeader, Pagination } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { CreateSheet } from "./CreateSheet/CreateSheet";
import * as classes from "./Sheets.css";
import { SheetsListItem } from "./SheetsListItem/SheetsListItem";

const PageSize = 10;

export const Sheets = (): ReactElement => {
  const { t } = useTranslation("common");

  const [page, setPage] = useState(1);
  const pagination = { offset: (page - 1) * PageSize, limit: PageSize };

  const docApi = useDocApi();
  const { data, isLoading } = useQuery(docApi.listKey(pagination), docApi.list);

  return (
    <PageHeader
      extra={[<CreateSheet key="create" />]}
      ghost={false}
      subTitle={t("sheetsSubtitle")}
      title={t("sheetsTitle")}
    >
      <List
        loading={isLoading}
        dataSource={data?.docs}
        itemLayout="horizontal"
        renderItem={(item) => <SheetsListItem doc={item} />}
      />
      <div className={classes.pagination}>
        <Pagination
          current={page}
          disabled={(data?.count ?? 0) < 1}
          onChange={setPage}
          total={data?.count}
        />
      </div>
    </PageHeader>
  );
};
