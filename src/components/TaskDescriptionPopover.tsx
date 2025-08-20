import { useState, type SetStateAction } from "react";
import type { TaskType } from "../App";
import Title from "./Title";
import { deleteReq, updateReq } from "../services/apiService";
import { Icons } from "../assets/icons";
import Popover from "./Popover";
import type { AxiosResponse } from "axios";
import type { TaskToSend } from "../pages/AddTaskPage";

interface TaskDescriptionPopoverProps {
  task: TaskType;
  showTaskDetails: boolean;
  setShowTaskDetails: React.Dispatch<SetStateAction<boolean>>;
}

export default function TaskDetailsPopover({
  task,
  showTaskDetails,
  setShowTaskDetails,
}: TaskDescriptionPopoverProps) {
  
  const [editTask, setEditTask] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  async function OnEditClick(id: number): Promise<AxiosResponse | void> {
    if (title.trim() == "") {
      alert("You must give your task a title!");
    } else if (task) {
      const body = {
        title: title,
        description: description,
        concluded: task.concluded,
      };
      const response = await updateReq<TaskToSend>(`tasks/update/${id}`, body);
      alert("Task edited!");
      return response;
    }
  }

  return (
    <Popover showPopover={showTaskDetails} setShowPopover={setShowTaskDetails}>
      <div className={`${editTask ? "hidden" : ""}`}>
        <Title darkTheme={false}>{task.title}</Title>
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`font-poppins font-semibold text-4xl mb-10 duration-1000 text-center outline-0 ${
          editTask ? "" : "hidden"
        }`}
      />
      <div className={`${editTask ? "hidden" : ""}`}>
        <p className="break-words mb-30 max-w-full">{task.description}</p>
      </div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`break-words mb-30 max-w-full text-center outline-0 ${
          editTask ? "" : "hidden"
        }`}
      />

      <div className="flex gap-x-10 mb-5">
        <button
          className="cursor-pointer"
          onClick={() => {
            setEditTask(!editTask)
            setTitle(task.title)
            setDescription(task.description
            )
          }}  
        >
          <Icons.Pencil />
        </button>

        <button
          className="cursor-pointer"
          onClick={() => deleteReq(`tasks/delete/${task.id}`)}
        >
          <Icons.Trash />
        </button>
      </div>
      <button
        onClick={() => {
          OnEditClick(task.id)
           
        }}
        className={`${
          editTask ? "" : "hidden"
        } bg-lightThemeEmphasis text-white font-bold rounded-[8px] py-1 px-2 hover:bg-black hover:cursor-pointer duration-400`}
      >
        Save
      </button>
    </Popover>
  );
}
