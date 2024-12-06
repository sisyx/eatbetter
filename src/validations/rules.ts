import * as Yup from "yup";

const phoneRegExp = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;

let cooperateSchema = Yup.object().shape({
  message: Yup.string()
    .min(10, "متن شما حداقل باید 10 حرف داشته باشد")
    .max(200, "متن شما حداکثر باید 200 حرف داشته باشد")
    .required("لطفا متنی بنویسید"),

  phone: Yup.string()
    .matches(phoneRegExp, "شماره تماس معتبر نیست")
    .required("لطفا شماره تماس خودتون رو وارد کنید"),
    email: Yup.string()
    .email("ایمیل معتبر نیست")
    .min(10, "ایمیل شما حداقل باید 10 حرف داشته باشد")
    .max(30, "ایمیل شما حداکثر باید 30 حرف داشته باشد")
    .required("لطفا ایمیل خودتون رو وارد کنید"),

  name: Yup.string()
    .min(3, "اسم شما حداقل باید 3 حرف داشته باشد")
    .max(12, "اسم شما حداکثر باید 12 حرف داشته باشد")
    .required("لطفا اسم خودتون رو وارد کنید"),

  workExperience: Yup.string() 
    .required("لطفا میزان تجربه کاریتون رو وارد کنید"),
});

let stockSchema = Yup.object().shape({
  bankName: Yup.string()
    .min(10, "اسم بانک شما حداقل باید 10 حرف داشته باشد")
    .max(200, "اسم بانک شما حداکثر باید 200 حرف داشته باشد")
    .required("لطفا اسم بانک را بنویسید"),

  shabaNumber: Yup.string()
    .min(10, "شماره شبای   شما حداقل باید 10 حرف داشته باشد")
    .max(200, "شماره شبای   شما حداکثر باید 200 حرف داشته باشد")
    .required("لطفا شماره شبا خودتون رو وارد کنید"),

  name: Yup.string()
    .min(3, "نام کاربری شما حداقل باید 3 حرف داشته باشد")
    .max(12, "نام کاربری شما حداکثر باید 12 حرف داشته باشد")
    .required("لطفا اسم خودتون رو وارد کنید"),

  password: Yup.string()
    .min(3, "رمز عبور شما حداقل باید 3 حرف داشته باشد")
    .max(12, "رمز عبور شما حداکثر باید 12 حرف داشته باشد")
    .required("لطفا رمز عبور خودتون رو وارد کنید"),
});

let loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .min(10, "ایمیل شما حداقل باید 10 حرف داشته باشد")
    .max(30, "ایمیل شما حداکثر باید 30 حرف داشته باشد")
    .required("لطفا ایمیل خودتون رو وارد کنید"),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9.@$-_#]{6,}$/,
      "رمز عبور شما با فرمت صحیحی وارد نشده است",
    )
    .required("لطفا رمز عبور خودتون رو وارد کنید"),
});

let registerSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, "شماره تماس معتبر نیست")
    .required("لطفا شماره تماس خودتون رو وارد کنید"),

  userName: Yup.string()
    .min(3, "اسم شما حداقل باید 10 حرف داشته باشد")
    .max(10, "اسم شما حداکثر باید 10 حرف داشته باشد")
    .required("لطفا اسم خودتون رو بنویسید"),
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .min(10, "ایمیل شما حداقل باید 10 حرف داشته باشد")
    .max(30, "ایمیل شما حداکثر باید 30 حرف داشته باشد")
    .required("لطفا ایمیل خودتون رو وارد کنید"),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9.@$-_#]{6,}$/,
      "رمز عبور باید شامل حروف بزرگ و کوچک انگلیسی و اعداد باشد و حداقل 6 حرف داشته باشد",
    )
    .required("لطفا رمز عبور خودتون رو وارد کنید"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null as any],
      "رمز عبور و تکرار رمز عبور باید مشابه باشند",
    )
    .required("لطفا رمز عبور خودتون رو تایید کنید"),
});
let contactsSchema = Yup.object().shape({
  message: Yup.string()
    .min(10, "متن شما حداقل باید 10 حرف داشته باشد")
    .max(200, "متن شما حداکثر باید 200 حرف داشته باشد")
    .required("لطفا متنی بنویسید"),

  phone: Yup.string()
    .matches(phoneRegExp, "شماره تماس معتبر نیست")
    .required("لطفا شماره تماس خودتون رو وارد کنید"),

  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .min(10, "ایمیل شما حداقل باید 10 حرف داشته باشد")
    .max(30, "ایمیل شما حداکثر باید 30 حرف داشته باشد")
    .required("لطفا ایمیل خودتون رو وارد کنید"),

  name: Yup.string()
    .min(5, "نام و نام خانوادگی شما حداقل باید 5 حرف داشته باشد")
    .max(15, "نام و نام خانوادگی شما حداکثر باید 15 حرف داشته باشد")
    .required("لطفا نام و نام خانوادگی خودتون رو وارد کنید"),
  subject: Yup.string()
    .min(3, "موضوع شما حداقل باید 3 حرف داشته باشد")
    .max(12, "موضوع شما حداکثر باید 12 حرف داشته باشد")
    .required("لطفا موضوع خودتون رو وارد کنید"),
});

let packageSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "عنوان شما حداقل باید 10 حرف داشته باشد")
    .max(20, "عنوان شما حداکثر باید 200 حرف داشته باشد")
    .required("لطفا متنی بنویسید"),

  currency: Yup.string()
    .required("لطفا نرخ ارز رو وارد کنید"),

  maxDiet: Yup.number()
    .required("لطفا حداکثر رژیم مورد نظر را وارد کنید"),

  price: Yup.number()
    .required("لطفا قیمت پکیج مورد نظر رو وارد کنید"),
})

export {
  stockSchema,
  contactsSchema,
  registerSchema,
  loginSchema,
  cooperateSchema,
  packageSchema,
};
