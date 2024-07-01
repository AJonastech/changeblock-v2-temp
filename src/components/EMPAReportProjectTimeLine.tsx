"use client";
import useIsMounted from "@/lib/hooks/useIsMounted";
import { Skeleton } from "@nextui-org/react";
import React, { LegacyRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const getWeekDates = (startDate: string, weeks: number): string[] => {
  const dates = [];
  const start = new Date(startDate);

  for (let i = 0; i < weeks; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i * 7);
    dates.push(
      date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    );
  }

  return dates;
};

interface Activity {
  name: string;
  week: number;
  description: string;
  duration: number;
}

interface Stage {
  name: string;
  activities: Activity[];
}

interface EMPAReportProjectTimelineProps {
  stages: Stage[];
  weeks: number;
  startDate: string;
}

const EMPAReportProjectTimeline: React.FC<EMPAReportProjectTimelineProps> = ({
  stages,
  weeks,
  startDate,
}) => {
  const isMounted = useIsMounted();
  const [activities, setActivities] = useState(stages);

  const weekDates = getWeekDates(startDate, weeks);

  const moveActivity = (draggedActivity: Activity, targetWeek: number) => {
    setActivities((prevStages) =>
      prevStages.map((stage) => ({
        ...stage,
        activities: stage.activities.map((activity) =>
          activity.name === draggedActivity.name
            ? { ...activity, week: targetWeek }
            : activity
        ),
      }))
    );
  };

  const resizeActivity = (activityName: string, newDuration: number) => {
    setActivities((prevStages) =>
      prevStages.map((stage) => ({
        ...stage,
        activities: stage.activities.map((activity) =>
          activity.name === activityName
            ? { ...activity, duration: newDuration }
            : activity
        ),
      }))
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="rounded-lg flex flex-col gap-6 ">
        <Skeleton isLoaded={isMounted} className="rounded-lg max-w-[80%]">
          <div className="font-bold text-3xl capitalize w-fit">
            Approach - Project timeline and governance
          </div>
        </Skeleton>

        <div className="relative text-dark-200">
          <div className="relative z-30 bg-secondary-100 p-4 py-6 rounded-lg">
            <Skeleton isLoaded={isMounted} className="rounded-lg">
              <p>
                We propose completing this engagement within a 17 week
                timeframe, with regular progress updates and checkpoints. The
                iterative approach to rapid design and prototyping will both
                inform and test the target state, implementation strategy and
                business case. Prototyping and validation work completed at the
                end of Stage 1 will help shape and fast track the vendor
                selection process in Stages 2 and 3.
              </p>
            </Skeleton>
          </div>
          <div className="absolute z-10 h-full w-[10rem] bg-black rounded-xl -translate-x-[5px] left-0 top-0"></div>
        </div>

        <div className="overflow-x-auto max-w-full pb-[2rem] ">
          <Skeleton
            isLoaded={isMounted}
            className="rounded-lg flex w-fit mx-auto"
          >
            <table className="max-w-full overflow-hidden mx-auto min-w-fit border-collapse border-2  border-black">
              <thead className="border-2 border-black">
                <tr className="border-2 border-black">
                  <th className=" p-4 w-[3rem] text-primary bg-primary">
                    stages
                  </th>
                  <th className="border-x border-gray-200 p-4 bg-primary text-white">
                    Key Activities
                  </th>
                  {weekDates.map((date, index) => (
                    <th
                      key={index}
                      className="border-x border-gray-200 p-4 bg-primary text-white fixed-header "
                    >
                      Week {index + 1}
                      <br />
                      <span className="text-gray-200 font-light"> {date}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activities.map((stage, stageIndex) => (
                  <React.Fragment key={stageIndex}>
                    <tr className="border-2 border-black p-4 text-center ">
                      <td
                        className="border-2 border-black  mx-auto"
                        rowSpan={stage.activities.length + 1}
                      >
                        <div
                          style={{ writingMode: "vertical-rl" }}
                          className="font-semibold rotate-180 pr-6  mx-auto text-center my-auto w-fit text-lg"
                        >
                          {stage.name}
                        </div>
                      </td>
                    </tr>
                    {stage.activities.map((activity, activityIndex) => (
                      <tr key={activityIndex} className="">
                        <td className="border border-gray-200 p-4 bg-white">
                          {activity.name}
                        </td>
                        {Array.from({ length: weeks }).map((_, weekIndex) => (
                          <WeekCell
                            weeks={weeks}
                            key={weekIndex}
                            weekIndex={weekIndex}
                            activity={activity}
                            moveActivity={moveActivity}
                            resizeActivity={resizeActivity}
                          />
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
              <thead className="border-2 border-black ">
                <tr className="border-2 border-black ">
                  <th className="border-2 border-black  border-r-0 p-4 text-white bg-primary"></th>
                  <th className="border-2 border-black border-x-1 border-x-gray-200  p-4 bg-primary text-white">
                    Status Meeting
                  </th>
                  {weekDates.map((date, index) => (
                    <th
                      key={index}
                      className="border-2 border-black border-x-1 border-x-gray-200  p-4 bg-primary text-white fixed-header "
                    ></th>
                  ))}
                </tr>
              </thead>
            </table>
          </Skeleton>
        </div>
      </div>
    </DndProvider>
  );
};

interface WeekCellProps {
  weekIndex: number;
  weeks: number;
  activity: Activity;
  moveActivity: (activity: Activity, targetWeek: number) => void;
  resizeActivity: (activityName: string, newDuration: number) => void;
}

const WeekCell: React.FC<WeekCellProps> = ({
  weekIndex,
  activity,
  moveActivity,
  resizeActivity,
  weeks,
}) => {
  const [{ isOver }, ref] = useDrop({
    accept: "activity",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: () => {
      if (activity.duration > weeks - weekIndex) {
        return;
      } else {
        return moveActivity(activity, weekIndex + 1);
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "activity",
    item: { activity },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleResize = (event: React.SyntheticEvent, { size }: any) => {
    const newDuration = Math.ceil(size.width / 100); // Adjust according to your width scale
    resizeActivity(activity.name, newDuration);
  };

  return (
    <td
      ref={ref as unknown as LegacyRef<HTMLTableCellElement>}
      className={`relative  hover:border-primary p-2 min-h-full fixed-header overflow-visible ${
        activity.duration <= weeks - weekIndex && isOver
          ? "bg-secondary/50 border-dashed border-black"
          : "border bg-secondary border-gray-200" // Styling for drop target
      } ${
        activity.duration > weeks - weekIndex && isOver
          ? "bg-red-500/30 border border-dashded border-red-400"
          : "border bg-secondary border-gray-200" // Original styling for active week
      }`}
    >
      {activity.week === weekIndex + 1 && (
        <ResizableBox
          width={activity.duration * 90} // Adjust according to your width scale
          height={60} // Fixed height
          axis="x"
          handle={
            <div className="bg-[#f3fae9] rounded-xl cursor-grab w-[49px] z-10 h-[50px] rotate-45 right-0 translate-x-[25px] top-[5px] absolute "></div>
          }
          minConstraints={[90, 60]}
          maxConstraints={[(weeks - activity.week + 1) * 80 * 0.9, 60]} // Adjust according to your width scale
          onResizeStop={handleResize}
          className="sticky top-0 left-[2px]   py- z-20 max-h-full bg-[#f3fae9] rounded-l-xl"
          style={{ opacity: isDragging ? 0.5 : 1 }}
        >
          <div
            ref={drag as unknown as LegacyRef<HTMLDivElement>}
            className="h-full transition-all duration-400   min-w-[80px] z-50 select-none flex p-3  cursor-move justify-center no-scrollbar text-[10px] items-star overflow-auto"
          >
            <span className="z-40 w-full">{activity.description}</span>
          </div>
        </ResizableBox>
      )}
    </td>
  );
};

export default EMPAReportProjectTimeline;
