import { useQuery } from "@tanstack/react-query";
import axiosAuth from "@/app/utils/http-client";
import QueryKeys from "../../query-keys";

interface IParameters {
  [key: string]: any;
}

export default function useGeAllPost(requestParams: IParameters = {}) {
  const result = useQuery({
    queryKey: [QueryKeys.GET_POST, requestParams],
    queryFn: async () => {
      try {
        const res = await axiosAuth.get(
          "/api/post/info/66207b7b1b0f0cba371015b2",
          {
            params: {
              ...requestParams,
            },
          },
        );
        return res?.data?.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  return result;
}
