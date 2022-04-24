import { Loading } from "@/components/Loading/Loading";
import { SheetHeader } from "@/modules/SheetHeader/SheetHeader";
import { useSheetApi } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import * as classes from "./Reports.css";
import { ReportsTable } from "./ReportsTable/ReportsTable";

export const Reports = (): ReactElement => {
  const params = useParams();
  const id = Number(params.sheetId);

  const sheetApi = useSheetApi();
  const { data } = useQuery(sheetApi.key(id), sheetApi.get);

  if (!data) return <Loading />;

  return (
    <div>
      <SheetHeader sheet={data} />
      <div className={classes.content}>
        <ReportsTable sheet={data} />
      </div>
    </div>
  );
};
