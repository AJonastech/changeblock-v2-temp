import AppsBadge from "@/components/AppsBadge";

import React, { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col max-h-full h-full justify-between   gap-[2rem] w-full relative bg-background ">
   
      <AppsBadge />
      <div className="w-full h-full  flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
