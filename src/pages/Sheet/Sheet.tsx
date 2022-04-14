import { Loading } from "@/components/Loading/Loading";
import { LocationGenerics } from "@/navigation/location";
import { useDocApi } from "@/services/DocApi";
import { Button, Result } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useMatch } from "react-location";
import { useQuery } from "react-query";

export const Sheet = (): ReactElement => {
  const { t } = useTranslation("common");

  const { params } = useMatch<LocationGenerics>();

  const docApi = useDocApi();
  const { data, refetch, isError, isLoading } = useQuery(
    docApi.key(Number(params.docId)),
    docApi.get
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
        title={t("sheetErrorMessage")}
        extra={
          <Button type="primary" key="back" onClick={handleRefreshClick}>
            {t("sheetReload")}
          </Button>
        }
      />
    );
  }

  return <Outlet />;
};
