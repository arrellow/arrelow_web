import { useQuery } from "@tanstack/react-query";
import axiosAuth from "@/app/utils/http-client";
import QueryKeys from "../../query-keys";

interface IParameters {
  [key: string]: any;
}

export default function useGeAllRecommendedPost(
  requestParams: IParameters = {},
) {
  const result = useQuery({
    queryKey: [QueryKeys.GET_POST, requestParams],
    queryFn: async () => {
      try {
        const res = await axiosAuth.get("/api/post/recommend", {
          params: {
            ...requestParams,
          },
        });
        return res?.data?.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  return result;
}
