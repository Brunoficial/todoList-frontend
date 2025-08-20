// Components
import Title from "./components/Title";
import TopBar from "./components/TopBar";
import Tasks from "./components/Tasks";

// Assets
import { Icons } from "./assets/icons";

// React
import { useEffect, useState } from "react";

// Utils 
import { fetchItems } from "./utils";
import AddTaskPopover from "./components/AddTaskPopover";

export interface TaskType {
  id: number;
  title: string;
  description: string;
  concluded: boolean;
}

function App() {
  const [serchValue, setSearchValue] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState<TaskType[]>([]);
  useEffect(() => {
    fetchItems<TaskType[]>("tasks/list", setTasks);
  }, [tasks]);

  return (
    <div
      className={`${
        darkTheme ? "bg-darkThemebody" : "bg-lightThemebody"
      } flex flex-col items-center py-24 px-4 min-h-screen duration-1000`}
    >
      <div
        className={`${
          darkTheme ? "bg-darkThemeContainer" : "bg-white"
        } relative flex flex-col items-center h-auto rounded-1 py-10 px-25 shadow-2xl duration-1000`}
      >
        <Title darkTheme={darkTheme}>TO-DO LIST</Title>
        <TopBar
          searchValue={serchValue}
          setSearchValue={setSearchValue}
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
        <Tasks tasks={tasks} darkTheme={darkTheme} />

        <button
          onClick={() => setShowAddTask(!showAddTask)}
          className={`${
            darkTheme ? "bg-darkThemeEmpahis" : "bg-lightThemeEmphasis"
          } mt-20 flex items-center justify-center rounded-[10px] shadow-2xl px-2 py-2 hover:cursor-pointer hover:bg-black duration-1000`}
        >
          <Icons.Plus />
        </button>
      <AddTaskPopover showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
      </div>
    </div>
  );
}

export default App;
