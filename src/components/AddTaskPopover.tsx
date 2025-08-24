// React
import React, { type SetStateAction } from "react";
import { useState } from "react";

// Components
import Popover from "./Popover";
import Title from "./Title";
import Input from "./Input";

// Services
import { createReq } from "../services/apiService";

// Interfaces
import type { TaskDtoInterface } from "../pages/MainPage";

interface AddTaskPopoverProps {
  showAddTask: boolean;
  setShowAddTask: React.Dispatch<SetStateAction<boolean>>;
}

export default function AddTaskPopover({
  showAddTask,
  setShowAddTask,
}: AddTaskPopoverProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function onAddClick(url: string, body: TaskDtoInterface) {
    if (title.trim() !== "") {

      const { status } = await createReq<TaskDtoInterface>(url, body);

      if (status === 200) {
        setDescription("");
        setTitle("");
        alert("Task created!");
        return;

      } else {
        alert("An unknown error ocurred when trying to create a task!");
      }
      alert("You must write a title for your task");
    }
  }

  return (
    <Popover showPopover={showAddTask} setShowPopover={setShowAddTask}>
      <Title darkTheme={false}>Add a task</Title>
      <div className="flex flex-col gap-5 mb-10">
        <Input
          maxLength={20}
          value={title}
          setValue={setTitle}
          child="Title: "
        />
        <Input
          maxLength={100}
          value={description}
          setValue={setDescription}
          child="Description: "
        />
      </div>
      <button
        className="px-2 py-1 bg-lightThemeEmphasis text-white font-bold rounded-[10px] hover:bg-black duration-1000 hover:cursor-pointer"
        onClick={() => onAddClick(`tasks/create`, {
          title: title,
          description: description,
          concluded: false
        })}
      >
        Send
      </button>
    </Popover>
  );
}
