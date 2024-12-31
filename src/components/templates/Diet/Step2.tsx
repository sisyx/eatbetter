import { useEffect, useState } from "react";
import useGetData from "../../../hooks/useGetData";
import { authStore } from "../../../stores/auth";
import { Button } from "../../shadcn/ui/button";
import { useTranslation } from "react-i18next";
import Loader, { ButtonLoader } from "../../modules/loader/Loader";
import { getDietsQues } from "../../../utils/fetchs";
import usePostData from "../../../hooks/usePostData";
import { useNavigate } from "react-router-dom";

const Step2 = ({ setStep }: any) => {
  const { i18n } = useTranslation();
  const [dietId, setDietId] = useState("");
  const { data, isLoading } = useGetData<any>(
    i18n.language ? ["dietsQues", i18n.language] : [],
    () => getDietsQues(i18n.language as string),
  );
  const { userData } = authStore((state) => state);
  const navigate = useNavigate();

  const { mutate: mutation, isPending } = usePostData<any>(
    `/api/UserQuestion/select-diet/${userData?.id}?dietId=${dietId}`,
    i18n.language === "fa"
      ? "درخواست ایجاد رژیم مخصوص شما با موفقیت ثبت شد"
      : "Your request to create a special diet has been successfully registered",
    false,
    (data) => {
      if (data.statusCode === 200) {
        navigate("/userpanel/health");
      }
    },
    false,
    "auth",
  );
  const step2ClickHandler = () => {
    mutation({});
  };
  return (
    <div>
      <select
        className="w-full rounded-md border border-main p-2"
        dir="rtl"
        name=""
        id=""
        onChange={(event) => setDietId(event.target.value)}
      >
        {data &&
          data.map((opt: { name: string; id: string }) => (
            <option id={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
      </select>
      <Button
        onClick={step2ClickHandler}
        className="mt-4 w-full"
        variant={"main"}
        disabled={!dietId}
      >
        {isPending ? (
          <ButtonLoader />
        ) : i18n.language === "fa" ? (
          "ثبت"
        ) : (
          "Submit"
        )}
      </Button>
      <Button
        onClick={() => setStep(1)}
        className="mt-4 w-full"
        variant={"outline"}
      >
        {i18n.language === "fa" ? "مرحله قبل" : "Previous step"}
      </Button>
      {isLoading && <Loader />}
    </div>
  );
};

export default Step2;
