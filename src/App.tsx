// Componentes
import Title from "./components/Title";
import TopBar from "./components/TopBar";
import { Icons } from "./assets/icons";

// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tasks from "./components/Tasks";
import { getTasks } from "./services/taskService";

// Services

export interface TaskType {
  id: number;
  title: string;
  description: string;
  concluded: boolean;
}

function App() {
  const navigate = useNavigate();

  const [serchValue, setSearchValue] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const tasks: TaskType[] = [
    {
      id: 1,
      title: "Título teste",
      description: "Essa é uma descrição teste só pra eu ver como é que fica",
      concluded: false,
    },
    {
      id: 2,
      title: "Título teste",
      description: "Essa é uma descrição teste só pra eu ver como é que fica",
      concluded: false,
    },
  ];

  return (
    <div
      className={`${
        darkTheme ? "bg-darkThemebody" : "bg-lightThemebody"
      } flex flex-col items-center py-24 px-4 w-full h-full duration-1000`}
    >
      <div
        className={`${
          darkTheme ? "bg-darkThemeContainer" : "bg-white"
        } relative flex flex-col items-center h-[824px] w-[1000px] rounded-[4px] py-10 px-25 shadow-2xl duration-1000`}
      >
        <Title darkTheme={darkTheme}>TO-DO LIST</Title>
        <TopBar
          searchValue={serchValue}
          setSearchValue={setSearchValue}
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
        <Tasks tasks={tasks} />

        <button
          onClick={() => navigate("/addTask")}
          className={`${
            darkTheme ? "bg-darkThemeEmpahis" : "bg-lightThemeEmphasis"
          } mt-[80px] flex items-center justify-center rounded-[4px] shadow-2xl px-2 py-2 hover:cursor-pointer hover:bg-black duration-1000`}
        >
          <Icons.Plus />
        </button>
      </div>
    </div>
  );
}

export default App;
