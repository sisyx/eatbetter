import { useEffect, useState } from "react";
import Layout from "../../../Layouts/UserLayouts";
import Box from "../../../components/templates/UserPanel/profile/Box";
import { Button } from "../../../components/shadcn/ui/button";
import ChangePassword from "../../../components/templates/UserPanel/profile/components/ChangePassword";
import { useTranslation } from "react-i18next";
import { authStore } from "../../../stores/auth";
import swal from "sweetalert";
import useDeleteData from "../../../hooks/useDeleteData";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";
import Title from "../../../components/modules/Title/Title";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { t, i18n } = useTranslation();
  const { userData, setUserData, setLogin } = authStore((state) => state);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (userData) {
      setUserName(userData.username);
      setEmail(userData.email);
      setPhoneNumber(userData.phoneNumber);
    }
  }, [userData]);

  const { mutate: mutation } = useDeleteData(
    `/api/user/api/users/${userData?.id}`,
    i18n.language === "fa"
      ? "کاربر با موفقیت حذف شد"
      : "User delete successfuly",
    "auth",
    (data) => {
      if (data.statusCode === 200) {
        navigate("/");
        Cookies.remove("eatBetterToken");
        queryClient.invalidateQueries({ queryKey: ["auth"] });
        setUserData(null as any);
        setLogin(false);
      }
    },
  );

  const userDeleteHandler = () => {
    swal({
      title:
        i18n.language === "fa"
          ? "آیا از حذف اکانت کاربری خود اطمینان دارید؟"
          : "Are you sure you want to delete your user account?",
      icon: "warning",
      buttons: [
        i18n.language === "fa" ? "نه" : "no",
        i18n.language === "fa" ? "آره" : "yes",
      ],
    }).then((res) => {
      if (res) {
        mutation();
      }
    });
  };
  return (
    <Layout>
      <div className="flex flex-row-reverse items-baseline justify-end gap-2 text-2xl font-bold">
        <h5 className="mb-2 max-sm:text-xl">{t("profile.title")}</h5>
        <div className="h-2 w-2 rounded-xl bg-main">
          <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
        </div>
      </div>
      <main> 
        <div className="mt-2 grid grid-cols-[auto] gap-5 border-t border-solid border-[#00000031] px-2 pt-4 md:!px-0 lg:!grid-cols-[1fr,1fr]">
          <Box
            setValue={setUserName}
            value={userName}
            requestBody="username"
            type="input"
            title={t("profile.name")}
            regex={/\S{3,15}/}
            errorText={
              i18n.language === "fa"
                ? "نام و نام خانوادگی باید حداقل 3 و حداکثر 15 حرف داشته باشد"
                : '"First and last name must be at least 3 and at most 15 letters long"'
            }
          />

          <Box
            setValue={setPhoneNumber}
            value={phoneNumber}
            type="number"
            title={t("profile.phone")}
            requestBody="phoneNumber"
            regex={/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/}
            errorText={
              i18n.language === "fa"
                ? "شماره موبایل نامعتبر است"
                : "Mobile number is invalid"
            }
          />

          <Box
            setValue={setEmail}
            value={email}
            type="email"
            title={t("profile.email")}
            requestBody="email"
            regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
            errorText={
              i18n.language === "fa"
                ? "ایمیل نامعتبر است"
                : "  Email is invalid"
            }
          />
          {/* <TwoStepBox
            setValue={setPhoneNumber}
            value={phoneNumber}
            type="number"
            title={t("profile.phone")}
            requestBody="phone"
            regex={/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/}
            errorText={
              i18n.language === "fa"
                ? "شماره موبایل نامعتبر است"
                : "Mobile number is invalid"
            }
          />
          <TwoStepBox
            setValue={setEmail}
            value={email}
            type="email"
            title={t("profile.email")}
            requestBody="email"
            regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
            errorText={
              i18n.language === "fa"
                ? "ایمیل نامعتبر است"
                : "  Email is invalid"
            }
          /> */}
          {/* <div>
            <div className="mt-4 flex items-center justify-between">
              <p>{t("profile.code")}</p>

              <IoReload className="cursor-pointer" />
            </div>
            <p className="mt-4 text-sm text-gray-500">232323</p>
          </div> */}
        </div>

        <Title
          className="mt-12"
          title={i18n.language === "fa" ? "پکیج" : "Package"}
        />

        {userData?.package ? <div className="mt-3 gap-2 flex xs:gap-4 xs:flex-row flex-col">
         <div className="flex gap-2">
          <p>{ i18n.language === "fa" ? 'نام :' : ' name:'} </p>
          <p>{userData?.package.packageName}</p>
         </div>
         <p className="xs:block hidden">-</p>
         <div className="flex gap-2">
          <p>{ i18n.language === "fa" ? 'حداکثر تعداد انتخاب رژیم :' : 'Maximum number of diet choices:'} </p>
          <p>{userData?.package.maxDiet}</p>
         </div>
        </div> : <p className="mt-3">پکیجی برای شما ثبت نشده است</p>}
        <ChangePassword />
        <Button onClick={userDeleteHandler} size={"sm"} variant={"main"}>
          {t("profile.deleteAccount")}
        </Button>
      </main>
    </Layout>
  );
};

export default Profile;
