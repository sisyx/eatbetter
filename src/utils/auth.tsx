"use client";
import { authStore } from "../stores/auth";
// import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { getUser } from "./fetchs";
import useGetData from "../hooks/useGetData";
import Loader from "../components/modules/loader/Loader";
// import Cookies from "js-cookie";

const Auth = () => {
  const { data, status, isLoading } = useGetData<any>(["auth"], getUser);
  const { setUserData, setLogin, setIsPending } = authStore((state) => state);

  useEffect(() => {
    if (status === "success" && data?.statusCode === 200) {
      setUserData(data.user);
      setLogin(true);
      setIsPending(false);
    } else if (status === "success" && data?.statusCode === 500) {
      setLogin(false);
      setIsPending(false);
    } else {
      setLogin(false);
      setIsPending(false);
    }
    console.log(data); 

  }, [status, data, setUserData]);

  return isLoading ? <Loader /> : null;
};

export default Auth;

// export const useLogoutHandler = () => {
//   const { setUserData, setLogin } = authStore((state) => state);
//   const queryClient = useQueryClient();
//   const navigate = useNavigation();

//   const logoutHandler = () => {
//     swal({
//       title: "آیا از خروج اطمینان دارید؟",
//       icon: "warning",
//       buttons: ["نه", "آره"],
//     }).then((res) => {
//       if (res) {
//         router.push("/");
//         Cookies.remove("token"); 
//         setUserData(null);
//         setLogin(false);
//         queryClient.invalidateQueries({ queryKey: ["auth"] });
//       }
//     });
//   };

//   return logoutHandler;
// };
