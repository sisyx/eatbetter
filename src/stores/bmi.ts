import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type State = {
  weight: string;
  age: string;
  height: string;
};
export type Action = {
  setWeight: (val: string) => void;
  setAge: (val: string) => void;
  setHeight: (val: string) => void;
};

export const bmiStore = create<State & Action>()(
  devtools((set) => ({
    weight: "",
    age: "",
    height: "160",
    setWeight: (val) => set(() => ({ weight: val }), false, "setWeight"),
    setAge: (val) => set(() => ({ age: val }), false, "setAge"),
    setHeight: (val) => set(() => ({ height: val }), false, "setHeight"),
  })),
);
