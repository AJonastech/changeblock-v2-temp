import EMPAReportMenu from "@/components/EMPAReportMenu";
import React, { ReactNode, Suspense } from "react";

const EMPALayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-full h-full max-h-full overflow-y-auto   flex">
      <Suspense>
        {" "}
        <EMPAReportMenu />
      </Suspense>

      <div className="h-full w-full">{children} </div>
    </div>
  );
};

export default EMPALayout;
