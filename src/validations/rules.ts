import * as Yup from "yup";
import i18n from "../i18n/i18n";

const phoneRegExp = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;

let cooperateSchema = Yup.object().shape({
  message: Yup.string()
    .min(
      10,
      i18n.language === "fa"
        ? "متن شما حداقل باید 10 حرف داشته باشد"
        : "Your message must be at least 10 characters long",
    )
    .max(
      200,
      i18n.language === "fa"
        ? "متن شما حداکثر باید 200 حرف داشته باشد"
        : "Your message should be a maximum of 200 characters",
    )
    .required(
      i18n.language === "fa" ? "لطفا متنی بنویسید" : "Please write a message",
    ),

  phone: Yup.string()
    .matches(
      phoneRegExp,
      i18n.language === "fa"
        ? "شماره تماس معتبر نیست"
        : "The phone number is not valid",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا شماره تماس خودتون را وارد کنید"
        : "Please write your phone number",
    ),
  email: Yup.string()
    .email(
      i18n.language === "fa" ? "ایمیل معتبر نیست" : "The email is not valid",
    )
    .min(
      10,
      i18n.language === "fa"
        ? "ایمیل شما حداقل باید 10 حرف داشته باشد"
        : "Your email must be at least 10 characters long",
    )
    .max(
      30,
      i18n.language === "fa"
        ? "ایمیل شما حداکثر باید 30 حرف داشته باشد"
        : "Your email must be a maximum of 30 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا ایمیل خودتون را وارد کنید"
        : "Please write your email",
    ),

  name: Yup.string()
    .min(
      3,
      i18n.language === "fa"
        ? "اسم شما حداقل باید 3 حرف داشته باشد"
        : "Your name must have at least 3 letters",
    )
    .max(
      12,
      i18n.language === "fa"
        ? "اسم شما حداکثر باید 18 حرف داشته باشد"
        : "Your name must be a maximum of 12 letters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا اسم خودتون را وارد کنید"
        : "Please write your name",
    ),

  workExperience: Yup.string().required(
    i18n.language === "fa"
      ? "لطفا میزان تجربه کاریتون را وارد کنید"
      : "Please enter your level of work experience",
  ),
});

let stockSchema = Yup.object().shape({
  bankName: Yup.string()
    .min(
      10,
      i18n.language === "fa"
        ? "اسم بانک شما حداقل باید 10 حرف داشته باشد"
        : "Your bank name must be at least 10 letters long",
    )
    .max(
      200,
      i18n.language === "fa"
        ? "اسم بانک شما حداکثر باید 200 حرف داشته باشد"
        : "Your bank name must be a maximum of 200 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا اسم بانک را بنویسید"
        : "Please write bank name",
    ),

  shabaNumber: Yup.string()
    .min(
      10,
      i18n.language === "fa"
        ? "شماره شبای   شما حداقل باید 10 حرف داشته باشد"
        : "Your night number must have at least 10 characters",
    )
    .max(
      200,
      i18n.language === "fa"
        ? "شماره شبای   شما حداکثر باید 200 حرف داشته باشد"
        : "Your night number must be a maximum of 200 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا شماره شبا خودتون را وارد کنید"
        : "Please enter your Sheba number",
    ),
  cartNumber: Yup.string()
    .min(
      16,
      i18n.language === "fa"
        ? "شماره کارت شما حداقل باید 16 حرف داشته باشد"
        : "Your night number must have at least 16 characters",
    )
    .max(
      16,
      i18n.language === "fa"
        ? "شماره کارت شما حداکثر باید 16 حرف داشته باشد"
        : "Your night number must be a maximum of 16 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا شماره کارت خودتون را وارد کنید"
        : "Please enter your cart number",
    ),

  name: Yup.string()
    .min(
      3,
      i18n.language === "fa"
        ? "نام و نام خانوادگی صاحب کارت حداقل باید 3 حرف داشته باشد"
        : "Your cart name must have at least 3 letters",
    )
    .max(
      12,
      i18n.language === "fa"
        ? "نام و نام خانوادگی صاحب کارت حداکثر باید 18 حرف داشته باشد"
        : "Your cart name must be a maximum of 12 letters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا نام و نام خانوادگی صاحب کارت را وارد کنید"
        : "Please write your cart name",
    ),

  password: Yup.string()
    .min(
      6,
      i18n.language === "fa"
        ? "رمز عبور شما حداقل باید 6 حرف داشته باشد"
        : "Your password must be at least 6 characters long",
    )
    .max(
      18,
      i18n.language === "fa"
        ? "رمز عبور شما حداکثر باید 18 حرف داشته باشد"
        : "Your password must be a maximum of 18 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا رمز عبور خودتون را وارد کنید"
        : "Please write your password",
    ),
});

let loginSchema = Yup.object().shape({
  email: Yup.string()
    .email(
      i18n.language === "fa" ? "ایمیل معتبر نیست" : "The email is not valid",
    )
    .min(
      10,
      i18n.language === "fa"
        ? "ایمیل شما حداقل باید 10 حرف داشته باشد"
        : "Your email must be at least 10 characters long",
    )
    .max(
      30,
      i18n.language === "fa"
        ? "ایمیل شما حداکثر باید 30 حرف داشته باشد"
        : "Your email must be a maximum of 30 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا ایمیل خودتون را وارد کنید"
        : "Please write your email",
    ),

  password: Yup.string()
    .min(
      6,
      i18n.language === "fa"
        ? "رمز عبور شما حداقل باید 6 حرف داشته باشد"
        : "Your password must be at least 6 characters long",
    )
    .max(
      18,
      i18n.language === "fa"
        ? "رمز عبور شما حداکثر باید 18 حرف داشته باشد"
        : "Your password must be a maximum of 18 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا رمز عبور خودتون را وارد کنید"
        : "Please write your password",
    ),
});

let registerSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      phoneRegExp,
      i18n.language === "fa"
        ? "شماره تماس معتبر نیست"
        : "The phone number is not valid",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا شماره تماس خودتون را وارد کنید"
        : "Please write your phone number",
    ),

  userName: Yup.string()
    .min(
      3,
      i18n.language === "fa"
        ? "اسم شما حداقل باید 3 حرف داشته باشد"
        : "Your name must have at least 3 letters",
    )
    .max(
      12,
      i18n.language === "fa"
        ? "اسم شما حداکثر باید 18 حرف داشته باشد"
        : "Your name must be a maximum of 12 letters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا اسم خودتون را وارد کنید"
        : "Please write your name",
    ),

  email: Yup.string()
    .email(
      i18n.language === "fa" ? "ایمیل معتبر نیست" : "The email is not valid",
    )
    .min(
      10,
      i18n.language === "fa"
        ? "ایمیل شما حداقل باید 10 حرف داشته باشد"
        : "Your email must be at least 10 characters long",
    )
    .max(
      30,
      i18n.language === "fa"
        ? "ایمیل شما حداکثر باید 30 حرف داشته باشد"
        : "Your email must be a maximum of 30 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا ایمیل خودتون را وارد کنید"
        : "Please write your email",
    ),

  password: Yup.string()
    .min(
      6,
      i18n.language === "fa"
        ? "رمز عبور شما حداقل باید 6 حرف داشته باشد"
        : "Your password must be at least 6 characters long",
    )
    .max(
      18,
      i18n.language === "fa"
        ? "رمز عبور شما حداکثر باید 18 حرف داشته باشد"
        : "Your password must be a maximum of 18 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا رمز عبور خودتون را وارد کنید"
        : "Please write your password",
    ),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null as any],
      i18n.language === "fa"
        ? "رمز عبور و تکرار رمز عبور باید مشابه باشند"
        : "Password and confirm password must be the same",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا رمز عبور خودتون را تایید کنید"
        : "Please confirm your password",
    ),
});
let contactsSchema = Yup.object().shape({
  message: Yup.string()
    .min(
      10,
      i18n.language === "fa"
        ? "متن شما حداقل باید 10 حرف داشته باشد"
        : "Your message must be at least 10 characters long",
    )
    .max(
      200,
      i18n.language === "fa"
        ? "متن شما حداکثر باید 200 حرف داشته باشد"
        : "Your message should be a maximum of 200 characters",
    )
    .required(
      i18n.language === "fa" ? "لطفا متنی بنویسید" : "Please write a message",
    ),

  phone: Yup.string()
    .matches(
      phoneRegExp,
      i18n.language === "fa"
        ? "شماره تماس معتبر نیست"
        : "The phone number is not valid",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا شماره تماس خودتون را وارد کنید"
        : "Please write your phone number",
    ),

  email: Yup.string()
    .email(
      i18n.language === "fa" ? "ایمیل معتبر نیست" : "The email is not valid",
    )
    .min(
      10,
      i18n.language === "fa"
        ? "ایمیل شما حداقل باید 10 حرف داشته باشد"
        : "Your email must be at least 10 characters long",
    )
    .max(
      30,
      i18n.language === "fa"
        ? "ایمیل شما حداکثر باید 30 حرف داشته باشد"
        : "Your email must be a maximum of 30 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا ایمیل خودتون را وارد کنید"
        : "Please write your email",
    ),

  name: Yup.string()
    .min(
      5,
      i18n.language === "fa"
        ? "نام و نام خانوادگی شما حداقل باید 5 حرف داشته باشد"
        : "Your first name and last name must have at least 5 letters",
    )
    .max(
      20,
      i18n.language === "fa"
        ? "نام و نام خانوادگی شما حداکثر باید 20 حرف داشته باشد"
        : "Your first name and last name must be a maximum of 20 letters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا نام و نام خانوادگی خودتون را وارد کنید"
        : "Please write your first name and last name",
    ),

  subject: Yup.string()
    .min(
      3,
      i18n.language === "fa"
        ? "موضوع شما حداقل باید 3 حرف داشته باشد"
        : "Your subject must be at least 3 letters long",
    )
    .max(
      12,
      i18n.language === "fa"
        ? "موضوع شما حداکثر باید 18 حرف داشته باشد"
        : "Your subject must be a maximum of 18 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا موضوع خودتون را وارد کنید"
        : "Please write your subject",
    ),
});

let packageSchema = Yup.object().shape({
  name: Yup.string()
    .min(
      4,
      i18n.language === "fa"
        ? "عنوان شما حداقل باید 4 حرف داشته باشد"
        : "Your title must be at least 4 characters long",
    )
    .max(
      20,
      i18n.language === "fa"
        ? "عنوان شما حداکثر باید 200 حرف داشته باشد"
        : "Your title should be a maximum of 200 characters",
    )
    .required(
      i18n.language === "fa" ? "لطفا متنی بنویسید" : "Please write a text",
    ),

  nameFa: Yup.string()
    .min(
      4,
      i18n.language === "fa"
        ? "عنوان شما حداقل باید 4 حرف داشته باشد"
        : "Your title must be at least 4 characters long",
    )
    .max(
      20,
      i18n.language === "fa"
        ? "عنوان شما حداکثر باید 200 حرف داشته باشد"
        : "Your title should be a maximum of 200 characters",
    )

    .required(
      i18n.language === "fa" ? "لطفا متنی بنویسید" : "Please write a text",
    ),

  currency: Yup.string().required(
    i18n.language === "fa"
      ? "لطفا نرخ ارز را وارد کنید"
      : "Please enter the exchange rate",
  ),

  maxDiet: Yup.number().required(
    i18n.language === "fa"
      ? "لطفا حداکثر رژیم مورد نظر را وارد کنید"
      : "Please enter the maximum desired diet",
  ),

  price: Yup.number().required(
    i18n.language === "fa"
      ? "لطفا قیمت پکیج مورد نظر را وارد کنید"
      : "Please enter the price of the desired package",
  ),
});

let CharityCardSchema = Yup.object().shape({
  accountNumber: Yup.string()
    .length(
      16,
      i18n.language === "fa"
        ? "لطفا شماره کارت را به درستی وارد کنید"
        : "Please enter the card number correctly",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا شماره کارت را وارد کنید"
        : "Please enter card number",
    ),

  iban: Yup.string().required(
    i18n.language === "fa" ? "لطفا iban را وارد کنید" : "Please enter iban",
  ),

  bankName: Yup.string().required(
    i18n.language === "fa"
      ? "لطفا نام بانک را وارد کنید"
      : "Please enter bank name",
  ),

  fullName: Yup.string()
    .min(
      4,
      i18n.language === "fa"
        ? "لطفا نام طولانی تری انتخاب کنید"
        : "Please choose a longer name",
    )
    .max(
      50,
      i18n.language === "fa"
        ? "لطفا نام کوتاه تری انتخاب کنید"
        : "Please choose a shorter name",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا نام خود را وارد کنید"
        : "Please enter your name",
    ),

  balance: Yup.number()
    .min(0)
    .required(
      i18n.language === "fa"
        ? "لطفا موجودی خود را وارد کنید"
        : "Please enter your balance",
    ),
});

let changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(
      6,
      i18n.language === "fa"
        ? "رمز عبور شما حداقل باید 6 حرف داشته باشد"
        : "Your password must be at least 6 characters long",
    )
    .max(
      18,
      i18n.language === "fa"
        ? "رمز عبور شما حداکثر باید 18 حرف داشته باشد"
        : "Your password must be a maximum of 18 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا رمز عبور خودتون را وارد کنید"
        : "Please write your password",
    ),

  newPassword: Yup.string()
    .min(
      6,
      i18n.language === "fa"
        ? "رمز عبور شما حداقل باید 6 حرف داشته باشد"
        : "Your password must be at least 6 characters long",
    )
    .max(
      18,
      i18n.language === "fa"
        ? "رمز عبور شما حداکثر باید 18 حرف داشته باشد"
        : "Your password must be a maximum of 18 characters",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا رمز عبور خودتون را وارد کنید"
        : "Please write your password",
    ),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword"), null as any],
      i18n.language === "fa"
        ? "رمز عبور جدید و تکرار رمز عبور جدید باید مشابه باشند"
        : "New password and repeat new password must be the same",
    )
    .required(
      i18n.language === "fa"
        ? "لطفا رمز عبور جدید خودتون را تایید کنید"
        : "Please confirm your new password",
    ),
});
export {
  stockSchema,
  contactsSchema,
  registerSchema,
  loginSchema,
  cooperateSchema,
  packageSchema,
  CharityCardSchema,
  changePasswordSchema,
};
