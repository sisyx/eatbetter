import React from "react";
import SideBar from "../components/templates/UserPanel/SideBar";
import TopBar from "../components/templates/UserPanel/TopBar";

type Props = { children: React.ReactNode };

const AdminLayouts = ({ children }: Props) => {
  return (
    <div dir="rtl" className="flex">
      <SideBar />
      <div className="w-full">
        <TopBar />
        <div className="p-7">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayouts;
