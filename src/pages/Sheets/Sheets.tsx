import { LocationGenerics } from "@/navigation/location";
import { paths } from "@/navigation/paths";
import { useSheetApi } from "@/services/SheetApi";
import { Button, List, PageHeader, Pagination } from "antd";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-location";
import { useQuery } from "react-query";

const PageSize = 10;

export const Sheets = (): ReactElement => {
  const { t } = useTranslation("common");

  const [page, setPage] = useState(1);
  const pagination = { offset: (page - 1) * PageSize, limit: PageSize };

  const sheetApi = useSheetApi();
  const { data } = useQuery(sheetApi.listKey(pagination), sheetApi.list);

  return (
    <PageHeader
      extra={[<Button type="primary">{t("addSheet")}</Button>]}
      ghost={false}
      subTitle={t("sheetsSubtitle")}
      title={t("sheetsTitle")}
    >
      <List
        itemLayout="horizontal"
        dataSource={data?.sheets}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={paths.sheet(item.id)}>{item.name}</Link>}
              description={item.createdAt}
            />
          </List.Item>
        )}
      />
      <Pagination current={page} onChange={setPage} total={data?.count} />
      <Link<LocationGenerics> to={paths.sheet(1)}>Sheet 1</Link>
    </PageHeader>
  );
};
