import { useNavigate } from "react-router-dom";
import { Icons } from "../assets/icons";
import Title from "../components/Title";
import Input from "../components/Input";
import { useState } from "react";
import { createReq } from "../services/apiService";

export interface TaskToSend {
    title: string,
    description: string,
    concluded: boolean
  }

export default function AddTaskPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onAddClick() {
    if (title.trim() !== "") {
      const body = {
        title: title,
        description: description,
        concluded: false,
      };

      createReq<TaskToSend>("tasks/create", body);
      setDescription("");
      setTitle("");
    } else {
      alert("You must write a title for your task"); 
    }
    
  }
  return (
    <div className="bg-lightThemebody flex flex-col items-center py-24 px-4 w-screen h-screen">
      <div className="relative bg-white flex flex-col items-center h-[516px] w-fit rounded-[4px] py-10 px-25 shadow-2xl">
        <Title darkTheme={false}>Create a task</Title>
        <div className="flex flex-col gap-5 mb-6">
          <Input value={title} setValue={setTitle} child="Title: " />
          <Input
            value={description}
            setValue={setDescription}
            child="Description: "
          />
        </div>
        <button
          onClick={() => onAddClick()}
          className="bg-lightThemeEmphasis hover:bg-black duration-300 hover:cursor-pointer text-white font-bold shadow-2xl px-4 py-1 rounded-[8px] "
        >
          Add
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
