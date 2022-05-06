import type { DebouncedFunc } from "lodash";
import debounce from "lodash.debounce";
import { useMemo } from "react";
import { useCallbackRef } from "./useCallbackRef";

export const useDebounce = <T, R>(
  callback: (arg: T) => R,
  delay: number
): DebouncedFunc<(arg: T) => R> => {
  const callbackMemoized = useCallbackRef(callback);

  return useMemo(
    () => debounce(callbackMemoized, delay),
    [callbackMemoized, delay]
  );
};
