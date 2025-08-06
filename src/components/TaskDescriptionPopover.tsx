import type { SetStateAction } from "react";
import type { TaskType } from "../App";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { deleteReq } from "../services/apiService";
import { Icons } from "../assets/icons";

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
  const navigate = useNavigate();

  function onEditClick() {
    const query = new URLSearchParams();
    query.set("id", task.id.toString());

    navigate(`/edit/?${query.toString()}`);
  }

  return (
    <div
      className={`absolute  left-0 top-0 w-full h-full bg-black/50 z-0 transition-all ${
        showTaskDetails ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } `}
    >
      <div
        className={`flex flex-col relative top-1/2 left-1/2 -translate-1/2 w-2xl items-center justify-center transition-all ease-in-out bg-white rounded-[10px] px-8 py-6 shadow-2xl z-50 ${
          showTaskDetails ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Title darkTheme={false}>{task.title}</Title>
        <p className="text-wrap mb-30">{task.description}</p>

        <div className="flex gap-x-10">
          <button className="cursor-pointer" onClick={() => onEditClick()}><Icons.Pencil/></button>
          
          <button className="cursor-pointer" onClick={() => deleteReq(`tasks/delete/${task.id}`)}><Icons.Trash/></button>
        </div>
        <button
          className="absolute right-3 top-2 cursor-pointer"
          onClick={() => {
            setShowTaskDetails(!showTaskDetails);
          }}
        >
          <Icons.Close/>
        </button>
      </div>
    </div>
  );
}
