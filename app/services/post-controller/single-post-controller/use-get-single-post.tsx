import { useQuery } from "@tanstack/react-query";
import axiosAuth from "@/app/utils/http-client";
import QueryKeys from "../../query-keys";

interface IParameters {
  [key: string]: any;
}

export default function useGeSinglePost(Id: any) {
  const result = useQuery({
    queryKey: [QueryKeys.GET_POST],
    queryFn: async () => {
      try {
        const res = await axiosAuth.get(`/api/post/info/${Id}`);
        return res?.data?.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  return result;
}
