import { useState, type SetStateAction } from "react";
import type { TaskType } from "../App";
import Title from "./Title";
import { deleteReq, updateReq } from "../services/apiService";
import { Icons } from "../assets/icons";
import Popover from "./Popover";
import type { TaskToSend } from "../App";

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

  async function OnEditClick(url: string, body: TaskToSend): Promise<void> {
    if (body.title.trim() == "") {
      alert("You must write a title for your task!");
      return;
    }

    const { status } = await updateReq<TaskToSend>(url, body);

    if (status === 200) {
      alert("Task edited!");
    } else {
      alert("An unknown error ocurred when trying to edit this task!");
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
        placeholder="Write a title.."
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
        placeholder="Write a description.."
        onChange={(e) => setDescription(e.target.value)}
        className={`break-words mb-30 max-w-full text-center outline-0 ${
          editTask ? "" : "hidden"
        }`}
      />

      <div className="flex gap-x-10 mb-5">
        <button
          className="cursor-pointer"
          onClick={() => {
            setEditTask(!editTask);
            setTitle(task.title);
            setDescription(task.description);
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
          OnEditClick(`tasks/update/${task.id}`, {
            title: title,
            description: description,
            concluded: task.concluded,
          });
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
