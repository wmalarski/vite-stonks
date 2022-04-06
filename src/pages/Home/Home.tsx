import { useAuthenticationStatus } from "@nhost/react";
import { ReactElement } from "react";
import { Dashboard } from "./Dashboard/Dashboard";
import { Login } from "./Login/Login";

export const Home = (): ReactElement => {
  const { isLoading, isAuthenticated } = useAuthenticationStatus();

  if (isLoading) {
    return <div>Loading Nhost authentication status...</div>;
  }

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return <Login />;
};
