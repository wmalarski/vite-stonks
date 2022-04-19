import { useSheetApi } from "@/services/SheetApi";
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

  const sheetApi = useSheetApi();
  const { data, isLoading } = useQuery(
    sheetApi.listKey(pagination),
    sheetApi.list
  );

  return (
    <PageHeader
      extra={[<CreateSheet key="create" />]}
      ghost={false}
      subTitle={t("sheets.subtitle")}
      title={t("sheets.title")}
    >
      <List
        loading={isLoading}
        dataSource={data?.sheets}
        itemLayout="horizontal"
        renderItem={(item) => <SheetsListItem sheet={item} />}
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
