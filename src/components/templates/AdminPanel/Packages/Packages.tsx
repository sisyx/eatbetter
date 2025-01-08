import Layout from "../../../../Layouts/AdminLayout";
import { Package as PackageType } from "./types";
import Package from "./Package";
import { GoPackage } from "react-icons/go";
import useGetData from "../../../../hooks/useGetData";
import { useState } from "react";
import Cookies from "js-cookie";
import CreatePackage from "./CreatePackage";
import { tokenName } from "../../../../config/constants";
import { ThreeDotsLoader } from "../../../modules/loader/ThreeDotLoader";
const apiUrl = import.meta.env.VITE_API_URL;

export const Packages = () => {
  const [reload, setReload] = useState<number>(1);

  function reloadFn() {
    setReload((cur) => cur + 1);
  }

  async function getPackages() {
    const eatBetterToken = Cookies.get(tokenName);
    try {
      const req = await fetch(`${apiUrl}/api/Package/GetAll`, {
        headers: {
          Authorization: `Bearer ${eatBetterToken}`,
          "Content-Type": "application/json",
        },
      });
      if (!req.ok) throw new Error(req.statusText);
      const res = await req.json();
      return res.packages;
    } catch (error) {
      return [];
    }
  }

  const {
    data: packages,
    isError: error,
    isLoading: loading,
  } = useGetData(["packages", reload], getPackages);

  return (
    <Layout>
      <div className="flex h-full w-full flex-col gap-4">
        <div className="flex flex-col items-center gap-2 gap-y-4 text-2xl font-bold">
          <GoPackage className="text-3xl" />
          <span>پکیج ها</span>
        </div>
        <hr />
        <div className="grid grid-cols-1 gap-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {error ? (
            <div>مشکلی در بارگیری پیش آمده</div>
          ) : loading ? (
            <ThreeDotsLoader dotSize={20} />
          ) : packages.length ? (
            packages.map((xpackage: PackageType) => (
              <Package
                nameFa={xpackage.nameFa as string}
                reloadFn={reloadFn}
                name={xpackage.name}
                currency={xpackage.currency}
                price={xpackage.price}
                maxDiet={xpackage.maxDiet}
                id={xpackage.id}
              />
            ))
          ) : (
            ""
          )}
          {!loading && <CreatePackage reloadFn={reloadFn} />}
        </div>
      </div>
    </Layout>
  );
};
