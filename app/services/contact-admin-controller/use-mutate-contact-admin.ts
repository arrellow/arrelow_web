import axiosAuth from "@/app/utils/http-client";
import { useMutation } from "@tanstack/react-query";

interface IProps {
  //TOD0: remove any type and put the right one
  requestPayload: any;
}

export default function useMutateContactAdmin() {
  const Mutation = useMutation({
    mutationFn: async ({ requestPayload }: IProps) => {
      try {
        let res: any;
        res = await axiosAuth.post("/api/user/notify/admin/", requestPayload);
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  return Mutation;
}