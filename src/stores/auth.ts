import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserProps {
  country: string;
  email: string;
  id: number;
  phoneNumber: string;
  referralCode: string;
  timeZone: string;
  username: string;
  walletBalance: string;
  cartRegister: boolean;
  questionBox: boolean;
  package: any;
  selectedDiets: string[];
  userCustomDiet: boolean;
  wallet: {
    accountNumber: string;
    bankName: string;
    fullName: string;
    iban: string;
    walletId: number;
  };
}
export type State = {
  userData: UserProps | null;
  login: boolean;
  isPending: boolean;
};
export type Action = {
  setUserData: (val: UserProps) => void;
  setLogin: (val: boolean) => void;
  setIsPending: (val: boolean) => void;
};

export const authStore = create<State & Action>()(
  devtools((set) => ({
    login: false,
    userData: null,
    isPending: true,
    setUserData: (val) => set(() => ({ userData: val }), false, "setUserData"),
    setLogin: (val) => set(() => ({ login: val }), false, "setLogin"),
    setIsPending: (val) =>
      set(() => ({ isPending: val }), false, "setIsPending"),
  })),
);
