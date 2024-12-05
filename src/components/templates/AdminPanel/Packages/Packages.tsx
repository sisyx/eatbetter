import Layout from '../../../../Layouts/AdminLayout';
import { Package as PackageType } from "./types";
import Package from "./Package";
import { GoPackage } from "react-icons/go";

const tmpPackages: PackageType[] = [
    {
        name: "پکیج پایه",
        currency: "USD",
        maxDiet: 5000,
        price: 499000
    },
    {
        name: "پکیج نقره ای",
        currency: "USD",
        maxDiet: 10000,
        price: 990000
    },
    {
        name: "پکیج برنزی",
        currency: "USD",
        maxDiet: 150000,
        price: 1990000
    },
    {
        name: "پکیج طلایی",
        currency: "USD",
        maxDiet: 20000,
        price: 2990000
    },
]


export const Packages = () => {


    return (
        <Layout>
            <div className="flex flex-col gap-4 w-full h-full">
                <div className="flex flex-col items-center text-2xl font-bold gap-2 gap-y-4">
                    <GoPackage className="text-3xl" />
                    <span>پکیج ها</span>
                </div>
                <hr />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 gap-y-8">
                    {
                        tmpPackages.map((xpackage) => <Package name={xpackage.name} currency={xpackage.currency} price={xpackage.price} maxDiet={xpackage.maxDiet} />)
                    }
                </div>
            </div>
        </Layout>
    );
}
