import Cookies from "js-cookie";
import { tokenName } from "../config/constants";
import { useTranslation } from "react-i18next";
const apiUrl = import.meta.env.VITE_API_URL;

export async function getUser() {
  const token = Cookies.get(tokenName);

  if (token) {
    const res = await fetch(`${apiUrl}/api/user/GetUserDetailsFromToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  }
}
export async function getAllDiets(language:string) {
  console.log(language);
  
  const res = await fetch(
    `${apiUrl}/api/Diet/GetAllDiets?lang=${language}`,
  );
  return res.json();
}