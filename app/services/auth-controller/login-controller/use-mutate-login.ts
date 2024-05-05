import { useMutation } from "@tanstack/react-query";
import axiosAuth from "@/app/utils/http-client";

interface IProps {
  // TODO: remove any type and put the righ one
  requestPayload: any;
}

export default function useMutateLogin() {
  const Mutation = useMutation({
    mutationFn: async ({ requestPayload }: IProps) => {
      try {
        let res: any;
        res = await axiosAuth.post("/api/auth/login", requestPayload);
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  return Mutation;
}
