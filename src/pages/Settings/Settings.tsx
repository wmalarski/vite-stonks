import { Loading } from "@/components/Loading/Loading";
import { SheetHeader } from "@/modules/SheetHeader/SheetHeader";
import { useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SheetSettings } from "./SheetSettings/SheetSettings";

export const Settings = (): ReactElement | null => {
  const params = useParams();
  const id = Number(params.sheetId);

  const sheetApi = useSheetApi();
  const { data, isLoading } = useQuery(sheetApi.key(id), sheetApi.get);

  if (isLoading) return <Loading />;

  if (!data) return null;

  return (
    <div>
      <SheetHeader sheet={data} />
      <SheetSettings sheet={data} />
    </div>
  );
};
