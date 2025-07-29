// Componentes
import Title from "./components/Title";
import TopBar from "./components/TopBar";
import Task from "./components/Task";
import { Icons } from "../public/assets/icons";

// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  concluded: boolean;
}

function App() {
  const navigate = useNavigate();

  const [serchValue, setSearchValue] = useState("");

  const [darkTheme, setDarkTheme] = useState(false)

  const task: TaskProps = {
    id: 1,
    title: "Título teste",
    description: "Essa é uma descrição teste só pra eu ver como é que fica",
    concluded: false,
  };

    const task2: TaskProps = {
    id: 2,
    title: "Estudar pra java",
    description: "Java é meio chatinho, mas é legal",
    concluded: false,
  };

  return (
    <div className={`${darkTheme? "bg-darkThemebody" : "bg-lightThemebody"} flex flex-col items-center py-24 px-4 w-screen h-screen duration-1000`}>
      <div className={`${darkTheme ? "bg-darkThemeContainer" : "bg-white"} relative flex flex-col items-center h-[824px] w-[1000px] rounded-[4px] py-10 px-25 shadow-2xl duration-1000`}>
        <Title darkTheme={darkTheme}>TO-DO LIST</Title>
        <TopBar searchValue={serchValue} setSearchValue={setSearchValue} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <div className="tasks max-h-[840px] overflow-auto flex flex-col w-full px-12 gap-y-5 overflow-y-auto">
          <Task task={task} darkTheme={darkTheme}/>
          <Task task={task2} darkTheme={darkTheme}/>
        </div>
        <button 
        onClick={() => navigate("/addTask")}
        className={`${darkTheme? "bg-darkThemeEmpahis" : "bg-lightThemeEmphasis"} absolute bottom-[90px] flex items-center justify-center rounded-[4px] shadow-2xl w-[32px] h-[32px] hover:cursor-pointer hover:bg-black duration-1000`}>
          <Icons.Plus/>
        </button>
      </div>
    </div>
  );
}

export default App;
