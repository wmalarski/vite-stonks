import { Loading } from "@/components/Loading/Loading";
import { LocationGenerics } from "@/navigation/location";
import { useSheetApi } from "@/services/SheetApi";
import { Button, Result } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useMatch } from "react-location";
import { useQuery } from "react-query";

export const Sheet = (): ReactElement => {
  const { t } = useTranslation("common");

  const { params } = useMatch<LocationGenerics>();

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
        title={t("sheet.errorMessage")}
        extra={
          <Button type="primary" key="back" onClick={handleRefreshClick}>
            {t("sheet.reload")}
          </Button>
        }
      />
    );
  }

  return <Outlet />;
};
