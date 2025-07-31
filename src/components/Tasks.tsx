import type { TaskType } from "../App";
import Task from "./Task";

interface TasksComponentProps {
    tasks: TaskType[],
}

export default function Tasks({tasks}:TasksComponentProps) {
  return (
    <ul className="tasks max-h-[840px] overflow-auto flex flex-col w-full px-12 gap-y-5 overflow-y-auto">
      {tasks.map((task) => (
        <li key={task.id}>
            <Task task={task} darkTheme={false}/>
        </li>
      ))}
    </ul>
  );
}
