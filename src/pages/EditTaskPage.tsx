// React
import { useEffect, useState } from "react";

// Types
import type { TaskType } from "../App";

// API
import { getReq } from "../services/apiService";
import { useNavigate, useSearchParams } from "react-router-dom";

// Components
import Title from "../components/Title";
import Input from "../components/Input";

// Icons
import { Icons } from "../assets/icons";

export default function EditTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<TaskType[]>([]);
  useEffect(() => {
    async function fetchTasks() {
      const data = await getReq("tasks/list");

      setTasks(data);
    }

    fetchTasks();
  }, []);

  const [task, setTask] = useState<TaskType | null>(null);
  const [task_id, setTask_id] = useState<number | null>(null);
  useEffect(() => {
    const idParam = searchParams.get("id");
    if (idParam) {
      setTask_id(parseInt(idParam));
    }
    const clickedTask = tasks.find((task) => task.id == task_id);
    if (clickedTask) {
      setTask(clickedTask);
    }
  }, [tasks, task_id, searchParams]);

  if (task) {
    return (
        <div className="bg-lightThemebody flex flex-col items-center py-24 px-4 w-screen h-screen">
          <div className="relative bg-white flex flex-col items-center h-[516px] w-fit rounded-[4px] py-10 px-25 shadow-2xl">
            <Title darkTheme={false}>Edit your task</Title>
            <div className="flex flex-col gap-5 mb-6">
              <Input value={task.title} setValue={setTitle} child="Title: " />
              <Input
                value={task.description}
                setValue={setDescription}
                child="Description: "
              />
            </div>
            <button
              className="bg-lightThemeEmphasis hover:bg-black duration-300 hover:cursor-pointer text-white font-bold shadow-2xl px-4 py-1 rounded-[8px] "
            >
              Edit
            </button>
            <button
              onClick={() => navigate(-1)}
              className="absolute bottom-15 bg-lightThemeEmphasis hover:bg-black duration-300 hover:cursor-pointer px-1 py-1 rounded-[8px]"
            >
              <Icons.ArrowLeft />
            </button>
          </div>
        </div>
    );
  }
  return <p>no task mate</p>;
}
