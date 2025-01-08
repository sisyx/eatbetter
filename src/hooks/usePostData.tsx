import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { toast } from "./use-toast";
import { tokenName } from "../config/constants";
import { useTranslation } from "react-i18next";
const apiUrl = import.meta.env.VITE_API_URL;

const usePostData = <T extends object>(
  url: string,
  successMsg: string | null,
  put?: boolean,
  successFunc?: ((data: any) => void) | null,
  formData?: boolean,
  queryUpdate?: string | null,
  isNotJson?: boolean,
) => {
  const eatBetterToken = Cookies.get(tokenName);
  const queryClient = useQueryClient();
  const { i18n } = useTranslation();

  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: async (data: T) => {
      const headers: HeadersInit = {
        Authorization: `Bearer ${eatBetterToken}`,
      };
      if (!formData) {
        headers["Content-Type"] = "application/json";
      }
      return await fetch(`${apiUrl}${url}`, {
        method: !put ? "POST" : "PUT",
        headers,
        // credentials: "include",
        body: formData ? (data as any) : JSON.stringify(data),
      }).then((res) => (!isNotJson ? res.json() : res));
    },
    onSuccess: (data) => {
      if (successFunc) {
        successFunc(data);
      }
      if (data.statusCode === 200) {
        queryUpdate &&
          queryClient.invalidateQueries({ queryKey: [queryUpdate] });
      }
      if (successMsg && data.statusCode === 200) {
        toast({
          variant: "success",
          className: i18n.language === "fa" ? "justify-start" : "justify-end",
          title: successMsg,
        });
      }
      if (successMsg && data.statusCode === 201) {
        toast({
          variant: "success",
          className: i18n.language === "fa" ? "justify-start" : "justify-end",
          title: successMsg,
        });
      }
    },
    onError: () => {
      toast({
        variant: "danger",
        className: i18n.language === "fa" ? "justify-start" : "justify-end",
        title:
          i18n.language === "fa"
            ? "خطایی غیر منتظره رخ داد"
            : "An unexpected error occurred",
      });
      // location.reload();
    },
  });

  return { mutate, isSuccess, isPending, isError };
};

export default usePostData;
