import { Icons } from "../assets/icons";
import { useState } from "react";
import { type TaskType } from "../App";
import type { TaskToSend } from "../App";
import TaskDetailsPopover from "./TaskDescriptionPopover";
import { updateReq } from "../services/apiService";

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
    const body = {
      title: task.title,
      description: task.description,
      concluded: !task.concluded,
    };
    setTaskConcluded(!taskConcluded);
    const response = updateReq<TaskToSend>(`tasks/update/${task.id}`, body);
    return response;
  }

  return (
    <div className="task flex flex-col justify-center gap-4 w-full">
      <div className="taskText flex items-center gap-5 px-2">
        <button
          onClick={() => onTaskStateClick(taskConcluded)}
          className={`flex items-center justify-center hover:cursor-pointer hover:border-2 border-1 border-lightThemeEmphasis w-6 h-6 ${
            task.concluded ? "bg-lightThemeEmphasis" : ""
          }`}
        >
          {task.concluded ? <Icons.Checkmark /> : ""}
        </button>
        <button
          className={`${
            darkTheme
              ? "text-white hover:text-purple-300"
              : "text-black hover:text-purple-900"
          } text-[24px] hover:cursor-pointer duration-1000 font-poppins`}
          onClick={() => onTaskClick(showTaskDetails)}
        >
          {task.title}
        </button>
      </div>
      <TaskDetailsPopover
        task={task}
        showTaskDetails={showTaskDetails}
        setShowTaskDetails={setShowTaskDetails}
      />
      <hr className="text-gray border-1" />
    </div>
  );
}
