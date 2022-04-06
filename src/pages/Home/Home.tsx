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
    return <Dashboard />;
  }

  return <Login />;
};
