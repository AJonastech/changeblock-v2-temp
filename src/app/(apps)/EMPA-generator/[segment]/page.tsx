import EMPAReportHome from "@/components/EMPAReportHome";
import EMPAReportSegment from "@/components/EMPAReportSegment";
import React from "react";

const page = ({
  params,
  searchParams,
}: {
  params: { segment: string };
  searchParams: { data: string; section: string };
}) => {
  const currentSegment = params?.segment;
  console.log({ currentSegment, searchParams });
  return (
    <div className="w-full h-full bg-white p-6 px-[2rem] shadow-md rounded-2xl overflow-y-auto">
      {currentSegment === "home" ? (
        <EMPAReportHome />
      ) : (
        <EMPAReportSegment section={searchParams.section} />
      )}
    </div>
  );
};

export default page;
