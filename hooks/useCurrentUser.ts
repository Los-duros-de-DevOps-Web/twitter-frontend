import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.URL_AUTH}current`,
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
