import { useMutation } from "@tanstack/react-query";
import axiosAuth from "@/app/utils/http-client";

interface IProps {
  // TODO: remove any type and put the righ one
  requestPayload: any;
  Id: number;
}

export default function useMutateLogin() {
  const Mutation = useMutation({
    mutationFn: async ({ requestPayload, Id }: IProps) => {
      try {
        let res: any;
        res = await axiosAuth.patch(
          `/api/post/update/${Id}/66207b7b1b0f0cba371015b2`,
          requestPayload,
        );
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  return Mutation;
}
