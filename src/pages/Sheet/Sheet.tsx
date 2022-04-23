import { ContentLayout } from "@/components/ContentLayout/ContentLayout";
import { Loading } from "@/components/Loading/Loading";
import { useSheetApi } from "@/services/SheetApi";
import { Button, Result } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { Outlet, useParams } from "react-router-dom";
import { SheetSidebar } from "./SheetSidebar/SheetSidebar";

export const Sheet = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "sheet" });

  const params = useParams();

  const sheetApi = useSheetApi();
  const { data, refetch, isError, isLoading } = useQuery(
    sheetApi.key(Number(params.sheetId)),
    sheetApi.get
  );

  const handleRefreshClick = () => {
    refetch();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return (
      <Result
        status="error"
        title={t("errorMessage")}
        extra={
          <Button type="primary" key="back" onClick={handleRefreshClick}>
            {t("reload")}
          </Button>
        }
      />
    );
  }

  return (
    <ContentLayout sidebar={<SheetSidebar sheetId={data.id} />}>
      <Outlet />
    </ContentLayout>
  );
};
