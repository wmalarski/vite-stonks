import { ReactElement, ReactNode, useState } from "react";
import { ReactLocation, Router as LocationRouter } from "react-location";
import { LocationGenerics } from "./location";
import { routes } from "./routes";

type Props = {
  children: ReactNode;
};

export const Router = ({ children }: Props): ReactElement => {
  const [routerRoutes] = useState(() => routes());
  const [location] = useState(() => new ReactLocation<LocationGenerics>());

  return (
    <LocationRouter location={location} routes={routerRoutes}>
      {children}
    </LocationRouter>
  );
};
