import { APIInstance } from "@/config/axios";
import { AxiosResponse, AxiosError } from "axios";
import { useEffect, useState } from "react";

type UseFetchState<T> = {
  state: "idle" | "loading" | "error" | "Success" | "not_found";
  result: null | T;
  error: null | Error;
};

enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}


export const useFetch = <T>(url: string): UseFetchState<T> => {
  const [fetchState, setFetchState] = useState<UseFetchState<T>>({
    state: "idle",
    result: null,
    error: null,
  });

  const fetchData = async () => {
    try {
      setFetchState((oldValue) => ({ ...oldValue, state: "loading" }));
      const response  : AxiosResponse = await APIInstance.get(url);
      if (response.status === HttpStatus.OK) {
        setFetchState({
          result: response.data.result,
          state: response.data.statusMsg,
          error: null,
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === HttpStatus.NOT_FOUND) {
          setFetchState({
            result: null,
            state: 'not_found',
            error: new Error(),
          });
        } else {
          setFetchState({
            result: null,
            state: 'error',
            error: axiosError,
          });
        }
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return fetchState;

}
