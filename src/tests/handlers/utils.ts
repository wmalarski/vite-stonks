import { AnyObject } from "@mswjs/data/lib/glossary";
import { QuerySelectorWhere } from "@mswjs/data/lib/query/queryTypes";

type ParseQueryParamsArgs = {
  searchParams: URLSearchParams;
  map?: Record<string, typeof Number | typeof String>;
};

type ParseQueryParamsResult<EntityType extends AnyObject> = {
  skip: number;
  take: number;
  where: QuerySelectorWhere<EntityType>;
};

export const parseQueryParams = <EntityType extends AnyObject = AnyObject>({
  searchParams,
  map = {},
}: ParseQueryParamsArgs): ParseQueryParamsResult<EntityType> => {
  const paginationKeys = ["offset", "limit"];
  const rawOffset = searchParams.get("offset");
  const rawLimit = searchParams.get("limit");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: QuerySelectorWhere<any> = {};
  const skip = rawOffset == null ? 0 : parseInt(rawOffset, 10);
  const take = rawLimit == null ? 100 : parseInt(rawLimit, 10);

  searchParams.forEach((value, key) => {
    if (paginationKeys.includes(key) || !(key in map)) return;
    const [, equals] = value.split(".");
    where[key] = { equals: map[key](equals) };
  });

  return { skip, take, where };
};

type ContentRangeArgs = {
  skip: number;
  take: number;
  count: number;
};

export const contentRange = ({
  count,
  take,
  skip,
}: ContentRangeArgs): string => {
  return `${skip}-${skip + take}/${count}`;
};
