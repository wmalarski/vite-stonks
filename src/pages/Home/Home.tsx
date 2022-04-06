import { SheetApiProvider } from "@/services/SheetApi";
import { useAuthenticationStatus } from "@nhost/react";
import { ReactElement } from "react";
import { Dashboard } from "./Dashboard/Dashboard";
import { Loading } from "./Loading/Loading";
import { Login } from "./Login/Login";

export const Home = (): ReactElement => {
  const { isLoading, isAuthenticated } = useAuthenticationStatus();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return (
      <SheetApiProvider>
        <Dashboard />
      </SheetApiProvider>
    );
  }

  return <Login />;
};
