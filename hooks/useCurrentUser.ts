import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "http://localhost:3002/current",
    fetcher
  );

  console.log("data", data);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
