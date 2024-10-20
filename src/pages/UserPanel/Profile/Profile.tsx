import { useState } from "react";
import Layout from "../../../Layouts/UserLayouts";
import Box from "../../../components/templates/UserPanel/profile/Box";
import TwoStepBox from "../../../components/templates/UserPanel/profile/TwoStepBox";
import { Button } from "../../../components/shadcn/ui/button";
import ChangePassword from "../../../components/templates/UserPanel/profile/components/ChangePassword";
import { IoReload } from "react-icons/io5";

const Profile = () => {
  const [userName, setUserName] = useState("شاهین");
  const [userFamily, setUserFamily] = useState("مشکل گشا");
  const [about, setAbout] = useState("عاشق طبیعت و کوه و صدای پرندگان");
  const [email, setEmail] = useState("kasrakasra924@gmail.com");
  const [gender, setGender] = useState("آقا");
  const [phoneNumber, setPhoneNumber] = useState("09046417084");
  const [avatar, setAvatar] = useState("");
  return (
    <Layout>
      <div className="flex flex-row-reverse items-baseline justify-end gap-2 text-2xl font-bold">
        <h5 className="mb-2 max-sm:text-xl">حساب کاربری</h5>
        <div className="h-2 w-2 rounded-xl bg-main">
          <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
        </div>
      </div>
      <main>
        <div className="relative bottom-4 mx-auto block w-max">
          <img
            className="h-20 w-20 rounded-full"
            src={
              avatar
                ? avatar
                : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0mU1hiNmdzqNKOq2N5c6qIxkFmeKNAhvfw&s`
            }
            alt="profile"
          />
          <span className="absolute -right-2 bottom-1 h-7 w-7 cursor-pointer rounded-full bg-main px-[10px] pb-[.1rem] pl-[16px] pt-[.1rem] text-white">
            +
            <input
              type="file"
              // onChange={(event) => profileChangeHandler(event)}
              className="absolute right-0 top-0 h-full w-full cursor-pointer opacity-0"
            />
          </span>
        </div>
        <div className="grid grid-cols-[auto] gap-5 border-t border-solid border-[#00000031] px-2 pt-4 md:!px-0 lg:!grid-cols-[1fr,1fr]">
          <Box
            setValues={[setUserName, setUserFamily]}
            values={[userName, userFamily]}
            type="text"
            multiple={["نام", "نام خانوادگی"]}
            requestBody={["firstName", "lastName"]}
            title="نام و نام خانوادگی"
            regex={/^[آ-یپچژگ\s]{3,15}$/}
            errorText="نام و نام خانوادگی باید فارسی، و حداقل 3 و حداکثر 15 حرف داشته باشد"
          />
          <TwoStepBox
            setValue={setPhoneNumber}
            value={phoneNumber}
            type="number"
            title="شماره موبایل"
            requestBody="phone"
            regex={/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/}
            errorText="شماره موبایل نامعتبر است"
          />
          <TwoStepBox
            setValue={setEmail}
            value={email}
            type="email"
            title="ایمیل"
            requestBody="email"
            regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
            errorText="ایمیل نامعتبر است"
          />
          <Box
            setValue={setGender}
            value={gender}
            type="radio"
            multiple={["مرد", "زن"]}
            options={["مرد", "زن"]}
            requestBody="gender"
            title="جنسیت"
          />
          <div>
            <div className="mt-4 flex items-center justify-between">
              <p>کد معارفه</p>

              <IoReload className="cursor-pointer" />
            </div>
            <p className="mt-4 text-sm text-gray-500">232323</p>
          </div>
        </div>
        <ChangePassword />
        <Button size={"sm"} variant={"main"}>
          حذف حساب کاربری
        </Button>
      </main>
    </Layout>
  );
};

export default Profile;
