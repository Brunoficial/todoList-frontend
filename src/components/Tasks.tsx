import type { TaskType } from "../App";
import Task from "./Task";

interface TasksComponentProps {
  tasks: TaskType[];
  darkTheme: boolean;
}

export default function Tasks({ tasks, darkTheme }: TasksComponentProps) {
  if (tasks.length > 0)
    return (
      <ul className="tasks max-h-[840px] overflow-auto flex flex-col w-full px-12 gap-y-5 overflow-y-auto">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} darkTheme={darkTheme} />
          </li>
        ))}
      </ul>
    );
  return (
    <p className={`${ darkTheme ? "text-white" : "text-black"} text-black font-bold font-poppins text-[24px] duration-1000`}>You haven't created any tasks yet :/</p>
  )
}
