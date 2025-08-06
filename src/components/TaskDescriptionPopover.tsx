import type { SetStateAction } from "react";
import type { TaskType } from "../App";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { deleteReq } from "../services/apiService";

interface TaskDescriptionPopoverProps {
  task: TaskType;
  showTaskDetails: boolean;
  setShowTaskDetails: React.Dispatch<SetStateAction<boolean>>;
}

export default function TaskDescriptionPopover({
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
      className={`absolute  left-0 top-0 w-full h-full bg-black/50 z-0 ${
        showTaskDetails ? "" : "hidden"
      } `}
    >
      <div
        className={`flex flex-col relative top-1/2 left-1/2 -translate-1/2 w-2xl items-center justify-center bg-white opacity-100 rounded-[10px] px-8 py-4 shadow-2xl z-50 ${
          showTaskDetails ? "" : "hidden"
        }`}
      >
        <Title darkTheme={false}>{task.title}</Title>
        <p className="text-wrap mb-10">{task.description}</p>

        <div className="flex gap-x-2">
          <button onClick={() => onEditClick()}>editar</button>
          /
          <button onClick={() => deleteReq(`tasks/delete/${task.id}`)}>deletar</button>
        </div>
        <button
          className="absolute right-2 top-2"
          onClick={() => {
            setShowTaskDetails(!showTaskDetails);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
