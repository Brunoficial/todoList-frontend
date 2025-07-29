import { Icons } from "../../public/assets/icons";
import { useState } from "react";
import { type TaskProps } from "../App";

interface TaskComponentProps {
  task: TaskProps;
  darkTheme: boolean
}

export default function Task({ task, darkTheme }: TaskComponentProps) {
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  function onTaskClick(showTaskDetails: boolean) {
    setShowTaskDetails(!showTaskDetails);
  }

  const [taskConcluded, setTaskConcluded] = useState(task.concluded);
  function onTaskStateClick(taskConcluded: boolean) {
    setTaskConcluded(!taskConcluded);
    task.concluded = !task.concluded;
  }

  return (
    <div className="task flex flex-col gap-4 w-full">
      <div className="taskText flex items-center gap-5 px-2">
        <button
          onClick={() => onTaskStateClick(taskConcluded)}
          className={`flex items-center justify-center hover:cursor-pointer hover:border-2 border-1 border-lightThemeEmphasis w-[24px] h-[24px]  ${
            task.concluded ? "bg-lightThemeEmphasis" : ""
          }`}
        >
          {task.concluded ? <Icons.Checkmark /> : ""}
        </button>
        <button
          className={`${darkTheme ? "text-white" : "text-black"} text-[24px] hover:cursor-pointer duration-1000`}
          onClick={() => onTaskClick(showTaskDetails)}
        >
          {task.title}
        </button>
      </div>
      <div
        className={`task-details px-2 duration-1000 ${
          showTaskDetails ? "" : "hidden"
        }`}
      >
        <p className={`${darkTheme? "text-white" : "text-black"} duration-1000 overflow-x-hidden w-full h-fit outline-0`}>{task.description}</p>
        <div className="flex items-center justify-center">
          <button className={`${darkTheme? "text-red-400 hover:text-red-600" : "text-red-700 hover:text-red-400"} duration-1000 text-[12px] hover:cursor-pointer`}>Delete Task</button>
        </div>
      </div>
      <hr className="text-gray border-1" />
    </div>
  );
}
