import { useMutation } from "@tanstack/react-query";
import axiosAuth from "@/app/utils/http-client";

interface IProps {
  // TODO: remove any type and put the righ one
  requestPayload: any;
}

export default function useMutateDeletePost() {
  const Mutation = useMutation({
    mutationFn: async ({ requestPayload }: IProps) => {
      try {
        let res: any;
        res = await axiosAuth.delete(
          "/api/post/delete/{{userId}}/677818819900110",
        );
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  return Mutation;
}
