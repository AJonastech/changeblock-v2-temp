import useIsMounted from "@/lib/hooks/useIsMounted";
import { Skeleton } from "@nextui-org/react";
import React from "react";

interface EMPAReportCardsProps {
  cards: TEMPAReportSummaryCard[];
}

const EMPAReportCards: React.FC<EMPAReportCardsProps> = ({ cards }) => {
  const isMounted = useIsMounted();

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-4">
      {cards.map((card, cardIndex) => (
        <div key={cardIndex} className="bg-white p-4 rounded-xl border ">
          <div className="flex items-center gap-3 mb-2">
            <Skeleton isLoaded={isMounted} className="rounded-lg">
              <h2 className="text-xl text-dark-200 font-semibold">
                {card.title}
              </h2>
            </Skeleton>

            <span className="text-gray-500">→</span>
          </div>
          <Skeleton isLoaded={isMounted} className="rounded-lg">
            {" "}
            <p className=" text-gray-600">{card.description}</p>
          </Skeleton>

          <div className="mt-4 flex flex-col gap-3 relative">
            {card.summaries.map((summary, summaryIndex) => (
              <div key={summaryIndex} className="mb-2 p-2 border rounded-lg">
                <Skeleton isLoaded={isMounted} className="rounded-lg">
                  {" "}
                  <h3 className="font-medium text-dark-200">{summary.title}</h3>
                </Skeleton>

                <div className="text-dark-100 text-base overflow-hidden  text-ellipsis ">
                  <Skeleton isLoaded={isMounted} className="rounded-lg my-2">
                    {" "}
                    <p className="text-nowrap ">
                      {" "}
                      {summary.summary[0] as unknown as string}
                    </p>{" "}
                  </Skeleton>
                </div>
              </div>
            ))}
            <div className="h-[10rem] w-full bg-gradient-to-t from-white/60 to-white/0 absolute bottom-0 left-0 "></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EMPAReportCards;
