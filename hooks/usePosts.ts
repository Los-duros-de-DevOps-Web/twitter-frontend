import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const usePosts = (userId?: string) => {
  const url = userId
    ? `${process.env.URL_POSTNOTI}api/posts?userId=${userId}`
    : `${process.env.URL_POSTNOTI}api/posts`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePosts;
