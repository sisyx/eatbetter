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