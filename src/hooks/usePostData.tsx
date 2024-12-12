import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import Cookies from "js-cookie";
import { toast } from "./use-toast";
import { tokenName } from "../config/constants";
const apiUrl = import.meta.env.VITE_API_URL;
   

const usePostData = <T extends object>(
  url: string,
  successMsg: string | null,
  put?: boolean,
  successFunc?: ((data: any) => void) | null,
  formData?: boolean,
  queryUpdate?: string | null,
) => {
  const eatBetterToken = Cookies.get(tokenName);
  const queryClient = useQueryClient(); 
  
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
      }).then((res) => res.json())
    },
    onSuccess: (data) => { 
      console.log(data);
      
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
          title: successMsg,
        });
      }
    },
    onError: (data) => {  
      console.log(data); 
      toast({
        variant: "danger",
        title: "خطایی غیر منتظره رخ داد",
      });
      // location.reload();
    },
  });

  return { mutate, isSuccess, isPending, isError };
};

export default usePostData;
