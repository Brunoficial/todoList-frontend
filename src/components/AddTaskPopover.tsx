import React, { type SetStateAction } from "react";
import { useState } from "react";
import Popover from "./Popover";
import Title from "./Title";
import Input from "./Input";
import { createReq } from "../services/apiService";
import type { TaskToSend } from "../pages/AddTaskPage";

interface AddTaskPopoverProps {
  showAddTask: boolean;
  setShowAddTask: React.Dispatch<SetStateAction<boolean>>;
}

export default function AddTaskPopover({ showAddTask, setShowAddTask }: AddTaskPopoverProps) {
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
        alert("Task created!")
      } else {
        alert("You must write a title for your task"); 
      }
    }  

  return (
    <Popover showPopover={showAddTask} setShowPopover={setShowAddTask}>
      <Title darkTheme={false}>Add a task</Title>
      <div className="flex flex-col gap-5 mb-10">
        <Input value={title} setValue={setTitle} child="Titulo: " />
        <Input
          value={description}
          setValue={setDescription}
          child="Description: "
        />
      </div>
      <button className="px-2 py-1 bg-lightThemeEmphasis text-white font-bold rounded-[10px] hover:bg-black duration-1000 hover:cursor-pointer" onClick={() => onAddClick()}>
        Send
      </button>
    </Popover>
  );
}
