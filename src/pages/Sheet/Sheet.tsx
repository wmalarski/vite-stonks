import { ContentLayout } from "@/components/ContentLayout/ContentLayout";
import { ErrorView } from "@/components/ErrorView/ErrorView";
import { Loading } from "@/components/Loading/Loading";
import { useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import { Outlet, useParams } from "react-router-dom";
import { SheetSidebar } from "./SheetSidebar/SheetSidebar";

export const Sheet = (): ReactElement => {
  const params = useParams();

  const sheetApi = useSheetApi();
  const { data, refetch, status } = useQuery(
    sheetApi.key(Number(params.sheetId)),
    sheetApi.get
  );

  console.log({ data });

  const handleRefreshClick = () => {
    refetch();
  };

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <ErrorView onRefreshClick={handleRefreshClick} />;
  }

  return (
    <ContentLayout sidebar={<SheetSidebar sheetId={data.id} />}>
      <Outlet />
    </ContentLayout>
  );
};

export default Sheet;
