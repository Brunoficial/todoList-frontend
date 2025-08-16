import React, { type SetStateAction } from "react";
import { useState } from "react";
import Input from "./Input";
import { Icons } from "../assets/icons";

interface AddTaskComponentProps {
  showAddTaskComponent: boolean;
  setShowAddTaskComponent: React.Dispatch<SetStateAction<boolean>>;
}

export default function AddTaskComponent({
  showAddTaskComponent,
  setShowAddTaskComponent,
}: AddTaskComponentProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      className={`flex flex-col mb-10 items-center justify-center gap-y-8 border-1 p-6 ${
        showAddTaskComponent ? "" : "hidden"
      }`}
    >
      <p className="font-poppins font-bold text-[32px]">Add a task</p>
      <div className="flex flex-col gap-5">
        <Input value={title} setValue={setTitle} child="Titulo: " />
        <Input
          value={description}
          setValue={setDescription}
          child="Description: "
        />
      </div>

      <button onClick={() => setShowAddTaskComponent(!showAddTaskComponent)}>
        <Icons.Close />
      </button>
    </div>
  );
}
