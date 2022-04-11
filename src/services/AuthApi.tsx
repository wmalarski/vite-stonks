import type { User } from "@supabase/supabase-js";
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { supabase } from "./supabase";

export type AuthApiService = {
  signIn: () => Promise<User | null>;
  signOut: () => Promise<void>;
};

type AuthApiContextValue =
  | {
      isInitialized: false;
    }
  | {
      isInitialized: true;
      user: User | null;
      api: AuthApiService;
    };

export const AuthApiContext = createContext<AuthApiContextValue>({
  isInitialized: false,
});

export const useAuthApi = (): AuthApiService => {
  const context = useContext(AuthApiContext);

  if (!context.isInitialized) {
    throw new Error("Auth Api context not defined");
  }

  return context.api;
};

export const useUser = (): User | null => {
  const context = useContext(AuthApiContext);

  if (!context.isInitialized) {
    throw new Error("Auth Api context not defined");
  }

  return context.user;
};

type Props = {
  children: ReactNode;
};

export const AuthApiProvider = ({ children }: Props): ReactElement => {
  const [user, setUser] = useState<User | null>(supabase.auth.user());

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    return () => {
      data?.unsubscribe?.();
    };
  }, []);

  const value = useMemo<AuthApiContextValue>(() => {
    return {
      api: {
        signIn: async () => {
          const { user, error, ...rest } = await supabase.auth.signIn(
            {
              provider: "google",
            },
            {
              scopes: "https://www.googleapis.com/auth/spreadsheets.readonly",
            }
          );
          console.log({ user, error, rest });
          if (error) throw error;
          return user;
        },
        signOut: async () => {
          const { error } = await supabase.auth.signOut();
          if (error) throw error;
        },
      },
      isInitialized: true,
      user,
    };
  }, [user]);

  return (
    <AuthApiContext.Provider value={value}>{children}</AuthApiContext.Provider>
  );
};
