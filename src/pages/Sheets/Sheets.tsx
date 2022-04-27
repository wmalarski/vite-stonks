import { ContentLayout } from "@/components/ContentLayout/ContentLayout";
import { useSheetApi } from "@/services/SheetApi";
import { List, PageHeader } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { CreateSheet } from "./CreateSheet/CreateSheet";
import { SheetsListItem } from "./SheetsListItem/SheetsListItem";
import { SheetsSidebar } from "./SheetsSidebar/SheetsSidebar";

const PageSize = 10;

export const Sheets = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "sheets" });

  const [page, setPage] = useState(1);
  const pagination = { offset: (page - 1) * PageSize, limit: PageSize };

  const sheetApi = useSheetApi();
  const { data, isLoading } = useQuery(
    sheetApi.listKey(pagination),
    sheetApi.list
  );

  return (
    <ContentLayout sidebar={<SheetsSidebar />}>
      <PageHeader
        extra={[<CreateSheet key="create" />]}
        ghost={false}
        subTitle={t("subtitle")}
        title={t("title")}
      >
        <List
          loading={isLoading}
          dataSource={data?.sheets}
          itemLayout="horizontal"
          renderItem={(item) => <SheetsListItem sheet={item} />}
          pagination={{
            current: page,
            disabled: (data?.count ?? 0) < 1,
            onChange: setPage,
            total: data?.count,
          }}
        />
      </PageHeader>
    </ContentLayout>
  );
};
