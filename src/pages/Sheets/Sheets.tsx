import { ContentLayout } from "@/components/ContentLayout/ContentLayout";
import { ErrorView } from "@/components/ErrorView/ErrorView";
import { useSheetApi } from "@/services/SheetApi";
import { List, PageHeader } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery, useQueryClient } from "react-query";
import { CreateSheet } from "./CreateSheet/CreateSheet";
import { SheetsListItem } from "./SheetsListItem/SheetsListItem";
import { SheetsSidebar } from "./SheetsSidebar/SheetsSidebar";

const PageSize = 10;

export const Sheets = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "sheets" });

  const [page, setPage] = useState(1);
  const pagination = { offset: (page - 1) * PageSize, limit: PageSize };

  const sheetApi = useSheetApi();
  const client = useQueryClient();
  const { data, isLoading, status, refetch } = useQuery(
    sheetApi.listKey(pagination),
    sheetApi.list,
    {
      refetchOnWindowFocus: false,
      onSuccess: (result) => {
        result.sheets.forEach((sheet) => {
          client.setQueryData(sheetApi.key(sheet.id), sheet);
        });
      },
    }
  );

  const handleRefreshClick = () => {
    refetch();
  };

  if (status === "error") {
    return <ErrorView onRefreshClick={handleRefreshClick} />;
  }

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
