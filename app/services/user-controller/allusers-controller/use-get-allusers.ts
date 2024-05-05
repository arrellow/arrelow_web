import { useQuery } from "@tanstack/react-query";
import axiosAuth from "@/app/utils/http-client";
import QueryKeys from "../../query-keys";

interface IParameters {
  [key: string]: any;
}

export default function useGetAllUsers(requestParams: IParameters = {}) {
  const result = useQuery({
    queryKey: [QueryKeys.GET_ALLUSERS, requestParams],
    queryFn: async () => {
      try {
        const res = await axiosAuth.get("/api/user/6633e2d60df131745c15ea98", {
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
