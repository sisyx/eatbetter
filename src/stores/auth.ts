import { create } from "zustand";
import { devtools } from "zustand/middleware"; 

export type State = {
  userData: any | null;
  login: boolean;
  isPending: boolean;
};
export type Action = {
  setUserData: (val: any | null) => void;
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
    setIsPending: (val) =>  set(() => ({ isPending: val }), false, "setIsPending"),
  })),
);
