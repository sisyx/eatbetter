import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
            headerlogin: "Login",
            headerlang: "فارسی",
            hederMainpage: "Home",
            aboutus: "about us",
            constactus: "Contact Us",
            workwithus: "Help Us",
            cookingInstruction: "Cook",
            breakfast: "Break fast",
            blog: "Blog",
            diets: "Diets",
            sleep_soul_mental: "Sleep & Soul",
            exercises: "Exercises"
        }
      },
      fa: {
        translation: {
            headerlogin: "ورود به حساب",
            headerlang: "en",
            hederMainpage: "صفحه اصلی",
            aboutus: "درباره ما",
            constactus: "ارتباط با ما",
            workwithus: "همکاری با ما",
            cookingInstruction: "دستور آشپزی",
            breakfast: "صبحانه",
            blog: "بلاگ",
            diets: "رژیم ها",
            sleep_soul_mental: "خواب و روح و روان",
            exercises: "ورزش ها"
        }
      }
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
