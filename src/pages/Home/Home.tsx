import { useUser } from "@/services/AuthApi";
import { ReactElement } from "react";
import { Dashboard } from "./Dashboard/Dashboard";
import { Login } from "./Login/Login";

export const Home = (): ReactElement => {
  const user = useUser();

  if (user) {
    return <Dashboard />;
  }

  return <Login />;
};
