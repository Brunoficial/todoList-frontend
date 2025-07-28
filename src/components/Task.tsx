import { Icons } from "../assets/icons";
import { useState } from "react";
import { type TaskProps } from "../App";

interface TaskComponentProps {
  task: TaskProps;
}

export default function Task({ task }: TaskComponentProps) {
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  function onTaskClick(showTaskDetails: boolean) {
    setShowTaskDetails(!showTaskDetails);
  }

  return (
    <div className="task flex flex-col gap-5 w-full">
      <div className="taskText flex items-center gap-5">
        <button className="items-center justify-center hover:cursor-pointer hover:bg-lightThemeEmphasis duration-300 border-1 border-lightThemeEmphasis w-[32px] h-[32px]">
          {task.concluded ? <Icons.Checkmark /> : ""}
        </button>
        <button
          className="text-[24px] hover:cursor-pointer hover:text-lightThemeEmphasis duration-300"
          onClick={() => onTaskClick(showTaskDetails)}
        >
          {task.title}
        </button>
      </div>
      <div
        className={`task-details duration-1000 ${
          showTaskDetails ? "" : "hidden"
        }`}
      >
        <p>{task.description}</p>
      </div>
      <hr className="text-gray" />
    </div>
  );
}
