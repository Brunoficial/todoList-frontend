// Interfaces 
import type { TaskInterface } from "../pages/MainPage";

// Components 
import Task from "./Task";

interface TasksComponentProps {
  tasks: TaskInterface[];
  darkTheme: boolean;
}

export default function Tasks({ tasks, darkTheme }: TasksComponentProps) {
  if (tasks.length > 0)
    return (
      <ul className="tasks overflow-auto flex flex-col w-3xl px-4 gap-y-5 overflow-y-auto">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} darkTheme={darkTheme} />
          </li>
        ))}
      </ul>
    );
  return (
    <p className={`${ darkTheme ? "text-white" : "text-black"} text-black font-bold font-poppins text-2xl duration-1000`}>You haven't created any tasks yet :/</p>
  )
}
