import { useState } from "react";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../../components/shadcn/ui/button";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <div className="relative flex flex-col items-start px-12 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:flex-row lg:!px-28">
        <img
          style={{ transform: "rotateY(181deg) " }}
          className="absolute -top-8 right-0 hidden h-[600px] w-[50%] object-cover opacity-30 lg:block xl:right-[10%] xl:top-9"
          src="/images/blob.svg"
          alt=""
        />
        <video
          src="/images/4C507YmpdJeL1Z82UN.mp4"
          autoPlay
          loop
          className="mx-auto w-full sm:w-1/2 lg:mx-0"
        ></video>
        <div
          dir="rtl"
          className="z-20 w-full rounded-lg bg-white px-4 pb-14 pt-6 shadow-2xl sm:px-10 lg:mt-24 lg:w-[410px] lg:pt-16"
        >
          <Title title="ورود" className="w-full border-b border-gray-400" />
          <div className="relative mt-12 w-full">
            <span className="absolute -top-3 right-3 bg-white px-3 text-sm">
              نام کاربری
            </span>
            <input
              type="text"
              className="w-full rounded-xl border border-main p-3 pl-4"
            />
          </div>
          <div className="relative mt-7 w-full">
            <span className="absolute -top-3 right-3 bg-white px-3 text-sm">
              رمز عبور
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full rounded-xl border border-main p-3 pl-4"
            />
            {showPassword ? (
              <FaEyeSlash
                className="absolute left-3 top-4 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className="absolute left-3 top-4 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <Button variant={"main"} className="mt-7 w-full">
            تایید
          </Button>
          <p className="mt-6 text-center font-thin">فراموشی رمز عبور</p>
          <Link
            className="mt-3 block text-center font-thin text-main"
            to={"/register"}
          >
            حساب کاربری ندارید؟ ثبت نام کنید
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
