import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { toast } from "./use-toast";
const apiUrl = import.meta.env.VITE_API_URL;

const useDeleteData = (
  url: string,
  successMsg: string | null,
  queryUpdate?: string,
  successFunc?: ((data: any) => void) | null,
) => {
  const accessToken = Cookies.get("AccessToken");
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: async () => {
      const headers: HeadersInit = {
        Authorization: `Bearer ${accessToken}`,
      };
      return await fetch(`${apiUrl}${url}`, {
        method: "DELETE",
        headers,
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      if (successFunc) {
        successFunc(data);
      }

      if (successMsg && data.statusCode === 200) {
        toast({
          variant: "success",
          title: successMsg,
        });
        queryUpdate &&
          queryClient.invalidateQueries({ queryKey: [queryUpdate] });
      }
    },
    onError: () => {
      toast({
        variant: "danger",
        title: "خطایی غیر منتظره رخ داد",
      });
      location.reload();
    },
  });

  return { mutate, isSuccess, isPending, isError };
};

export default useDeleteData;
