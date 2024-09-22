
import Sidebar from "@/src/components/UI/sidebar/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-10">
      <div className="w-[20%] min-h-screen"><Sidebar/></div>
      <div className="w-[80%]">{children}</div>
    </div>
  );
};

export default layout;
