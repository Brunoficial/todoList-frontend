// React
import { useEffect, useState } from "react";

// Types
import type { TaskType } from "../App";

// API
import { updateReq } from "../services/apiService";
import { useNavigate, useSearchParams } from "react-router-dom";

// Components
import Title from "../components/Title";
import Input from "../components/Input";

// Icons
import { Icons } from "../assets/icons";
import type { AxiosResponse } from "axios";
import { fetchItem } from "../utils";
import type { TaskToSend } from "./AddTaskPage";

export default function EditTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [task, setTask] = useState<TaskType | null>(null);

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

  useEffect(() => {
    const idParam = searchParams.get("id");
    fetchItem<TaskType>(`tasks/listById/${idParam}`, setTask);
  }, [searchParams]);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  if (task) {
    return (
      <div className="bg-lightThemebody flex flex-col items-center py-24 px-4 w-screen h-screen">
        <div className="relative bg-white flex flex-col items-center h-[516px] w-fit rounded-[4px] py-10 px-25 shadow-2xl">
          <Title darkTheme={false}>Edit your task</Title>
          <div className="flex flex-col gap-5 mb-6">
            <Input value={title} setValue={setTitle} child="Title: " />
            <Input
              value={description}
              setValue={setDescription}
              child="Description: "
            />
          </div>
          <button
            onClick={() => OnEditClick(task.id)}
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
  return (
    <div className="bg-lightThemebody flex flex-col items-center justify-center py-24 px-4 w-screen h-screen">
      <p className="font-poppins text-white text-[32px]">No task was found.</p>
    </div>
  );
}
