import { Loading } from "@/components/Loading/Loading";
import { InvoicePreview } from "@/modules/InvoicePreview/InvoicePreview";
import { LocationGenerics } from "@/navigation/location";
import { useInvoiceApi } from "@/services/InvoiceApi";
import { Profile } from "@/services/ProfileApi";
import { Sheet } from "@/services/SheetApi";
import { ReactElement } from "react";
import { useMatch } from "react-location";
import { useQuery } from "react-query";
import { InvoiceHeader } from "./InvoiceHeader/InvoiceHeader";

type Props = {
  sheet: Sheet;
};

export const InvoiceDetails = ({ sheet }: Props): ReactElement => {
  const { params } = useMatch<LocationGenerics>();
  const index = Number(params.invoiceId);

  const sheetApi = useInvoiceApi();
  const { data, isLoading } = useQuery(
    sheetApi.key(sheet.sheet_id, index),
    sheetApi.get,
    { refetchOnWindowFocus: false }
  );

  const profile: Profile = {
    account: "4567899876",
    address1: "ul. Per",
    address2: "33-333 Warsaw",
    bank: "Millennium",
    city: "Warsaw",
    company: "Company1",
    nip: "345678987",
  };

  if (isLoading || !data) return <Loading />;

  return (
    <div>
      <InvoiceHeader invoice={data} sheet={sheet} />
      <InvoicePreview profile={profile} invoice={data} />
    </div>
  );
};
