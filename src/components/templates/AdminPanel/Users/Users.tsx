import useGetData from "../../../../hooks/useGetData";
import Layout from "../../../../Layouts/AdminLayout";
import { useState } from "react";
import Cookies from "js-cookie";
import { User as UserType } from "./types";
import { User } from "./User";
import { FaPeopleGroup } from "react-icons/fa6";
import { tokenName } from "../../../../config/constants";
import { useTranslation } from "react-i18next";
import { ThreeDotsLoader } from "../../../modules/loader/ThreeDotLoader";
const apiUrl = import.meta.env.VITE_API_URL;

const Users = () => {
  const [reload, setReload] = useState<number>(1);
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  
  function reloadFn() {
    setReload((cur) => cur + 1);
  }

  async function getUsers() {
    const eatBetterToken = Cookies.get(tokenName);
    try {
      const req = await fetch(`${apiUrl}/api/user/api/users`, {
        headers: {
          Authorization: `Bearer ${eatBetterToken}`,
          "Content-Type": "application/json",
        },
      });
      if (!req.ok) throw new Error(req.statusText);
      const res = await req.json();
      return res.users;
    } catch (error) {
    }
  }

  const {
    data: users,
    isError: error,
    isLoading: loading,
  } = useGetData(["users", reload], getUsers);

  return (
    <Layout>
      <div className="flex h-full w-full flex-col gap-4">
        <div className="flex flex-col items-center gap-2 text-2xl font-bold">
          <FaPeopleGroup className="text-3xl" />
          <span>{t("adminUsers.title")}</span>
        </div>
        <hr />
        {error ? (
          <h1>{language === "fa" ? "مشکلی در بارگیری کاربران پیش آمده :(" :  "Error Loading Users"}</h1>
        ) : loading ? (
          <ThreeDotsLoader dotSize={20} />
        ) : (
          <div className="flex flex-col gap-2 pb-12">
            {users?.map((user: UserType) => (
              <User {...user} username={user.username} reloadFn={reloadFn} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Users;
