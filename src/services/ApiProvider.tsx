import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import {
  createSheet,
  deleteSheet,
  getSheet,
  keySheet,
  listKeySheet,
  listSheet,
  updateSheet,
} from "./sheets/sheet";
import { ApiService } from "./types";

type ApiContextValue =
  | {
      isInitialized: false;
    }
  | {
      isInitialized: true;
      api: ApiService;
    };

const ApiContext = createContext<ApiContextValue>({ isInitialized: false });

export const useApi = (): ApiService => {
  const context = useContext(ApiContext);

  if (!context.isInitialized) {
    throw new Error("Api context not defined");
  }

  return context.api;
};

type Props = {
  children: ReactNode;
};

export const ApiProvider = ({ children }: Props): ReactElement => {
  const value = useMemo<ApiContextValue>(() => {
    return {
      isInitialized: true,
      api: {
        sheet: {
          create: createSheet,
          delete: deleteSheet,
          get: getSheet,
          key: keySheet,
          list: listSheet,
          listKey: listKeySheet,
          update: updateSheet,
        },
      },
    };
  }, []);

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
