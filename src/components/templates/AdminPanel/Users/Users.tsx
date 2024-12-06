import useGetData from "../../../../hooks/useGetData";
import Layout from "../../../../Layouts/AdminLayout";
import { useState } from "react";
import Cookies from "js-cookie";
import { User as UserType } from "./types";
import { User } from "./User";
import { CircleLoader } from "../../../modules/loader/CircleLoader";
import { FaPeopleGroup } from "react-icons/fa6";
const apiUrl = import.meta.env.VITE_API_URL;

const Users = () => {
  const [reload, setReload] = useState<number>(1);

  function reloadFn() {
    setReload((cur) => cur + 1);
  }

  async function getUsers() {
    const eatBetterToken = Cookies.get("eatBetterToken");
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
      console.error(error);
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
          <span>کاربران سایت</span>
        </div>
        <hr />
        {error ? (
          <h1>Error Loading Users</h1>
        ) : loading ? (
          <CircleLoader />
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
