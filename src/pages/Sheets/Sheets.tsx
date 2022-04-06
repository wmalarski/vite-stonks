import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { PageArgs, useSheetApi } from "@/services/SheetApi";
import { Button, List, PageHeader } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-location";
import { useQuery } from "react-query";

export const Sheets = (): ReactElement => {
  const { t } = useTranslation("common");

  const sheetApi = useSheetApi();
  const [page, setPage] = useState<PageArgs>({ limit: 10, offset: 0 });
  const { data } = useQuery(sheetApi.listKey(page), sheetApi.list);

  return (
    <PageHeader
      extra={[<Button type="primary">{t("addSheet")}</Button>]}
      ghost={false}
      subTitle={t("sheetsSubtitle")}
      title={t("sheetsTitle")}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Link<LocationGenerics> to={paths.sheet("1")}>{item.name}</Link>
              }
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      ,<Link<LocationGenerics> to={paths.sheet("1")}>Sheet 1</Link>
    </PageHeader>
  );
};
