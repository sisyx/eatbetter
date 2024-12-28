import Cookies from "js-cookie";
import { tokenName } from "../config/constants";
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
export async function getAllDiets(language: string) {
  const res = await fetch(`${apiUrl}/api/Diet/GetAllDiets?lang=${language}`);
  return res.json();
}

export async function getWeightChartData(userId: number) {
  const res = await fetch(
    `${apiUrl}/api/UserWeight/GetWeightHistory?userId=${userId}`,
  );
  return res.json();
}
export async function getPackages(userId: number) {
  const res = await fetch(
    `${apiUrl}/api/Package/GetPageByCountryUser/${userId}`,
  );
  return res.json();
}
export async function getIncomeChartData(userId: number) {
  const res = await fetch(
    `${apiUrl}/api/Wallet/GetWalletBalanceForLast7Days?userId=${userId}`,
  );
  return res.json();
}
export async function getChallengs() {
  const res = await fetch(`${apiUrl}/api/Chalange/GetAllChallenges`);
  return res.json();
}
export async function getChallenge(challengeName: string) {
  const res = await fetch(
    `${apiUrl}/api/Chalange/GetChallengeByName/${challengeName}`,
  );
  return res.json();
}
