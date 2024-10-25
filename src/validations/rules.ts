import * as Yup from "yup";

const phoneRegExp = /((0?9)|(\+?989))\d{9}/g;

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

let contactsSchema = Yup.object().shape({
  message: Yup.string()
    .min(10, "متن شما حداقل باید 10 حرف داشته باشد")
    .max(200, "متن شما حداکثر باید 200 حرف داشته باشد")
    .required("لطفا متنی بنویسید"),

  phone: Yup.string()
    .email("ایمیل معتبر نیست")
    .matches(phoneRegExp, "شماره تماس معتبر نیست")
    .required("لطفا شماره تماس خودتون رو وارد کنید"),

  name: Yup.string()
    .min(3, "اسم شما حداقل باید 3 حرف داشته باشد")
    .max(12, "اسم شما حداکثر باید 12 حرف داشته باشد")
    .required("لطفا اسم خودتون رو وارد کنید"),
});

export { stockSchema, contactsSchema };
