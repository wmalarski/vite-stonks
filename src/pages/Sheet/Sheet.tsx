import { Loading } from "@/components/Loading/Loading";
import { EditSheet } from "@/modules/EditSheet/EditSheet";
import { RemoveSheet } from "@/modules/RemoveSheet/RemoveSheet";
import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { useSheetApi } from "@/services/SheetApi";
import { Button, PageHeader, Result } from "antd";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useMatch, useNavigate } from "react-location";
import { useQuery } from "react-query";

export const Sheet = (): ReactElement => {
  const { t } = useTranslation("common");

  const navigate = useNavigate();
  const { params } = useMatch<LocationGenerics>();

  const sheetApi = useSheetApi();
  const { data, refetch, isError, isLoading } = useQuery(
    sheetApi.key(Number(params.sheetId)),
    sheetApi.get
  );

  const handleRefreshClick = () => {
    refetch();
  };

  const handleRemoveSuccess = () => {
    navigate({ to: paths.home });
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

  return (
    <PageHeader
      extra={[
        <EditSheet key="edit" sheet={data} />,
        <RemoveSheet
          key="remove"
          onSuccess={handleRemoveSuccess}
          sheet={data}
        />,
      ]}
      ghost={false}
      subTitle={t("sheetSubtitle")}
      title={data.name}
    >
      <Outlet />
    </PageHeader>
  );
};
