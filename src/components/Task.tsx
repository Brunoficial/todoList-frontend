import { Icons } from "../assets/icons";
import { useState } from "react";
import { type TaskType } from "../App";
import { deleteReq, updateReq } from "../services/apiService";

interface TaskComponentProps {
  task: TaskType;
  darkTheme: boolean;
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
          className={`${
            darkTheme ? "text-white" : "text-black"
          } text-[24px] hover:cursor-pointer duration-1000 font-poppins`}
          onClick={() => onTaskClick(showTaskDetails)}
        >
          {task.title}
        </button>
      </div>
      <div
        className={`task-details flex flex-col gap-y-4 px-2 duration-1000 ${
          showTaskDetails ? "" : "hidden"
        }`}
      >
        <p
          className={`${
            darkTheme ? "text-white" : "text-black"
          } duration-1000 overflow-x-hidden w-full h-fit outline-0 font-poppins`}
        >
          {task.description}
        </p>
        <div className="flex items-center gap-2 text-[12px]">
          <button
            onClick={() => deleteReq(`tasks/delete/${task.id}`)}
            className={`${
              darkTheme
                ? "text-lightThemeEmphasis hover:text-red-600"
                : "text-lightThemeEmphasis hover:text-red-400"
            } duration-1000 text-[12px] hover:cursor-pointer`}
          >
            Delete
          </button>
          <p>/</p>
          <button 
            className={`${
              darkTheme
                ? "text-lightThemeEmphasis hover:text-red-600"
                : "text-lightThemeEmphasis hover:text-yellow-400"
            } duration-1000 text-[12px] hover:cursor-pointer`}>
            Edit
          </button>
        </div>
      </div>
      <hr className="text-gray border-1" />
    </div>
  );
}
