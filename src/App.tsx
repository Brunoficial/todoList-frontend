import { useState } from "react";
import { Icons } from "./assets/icons/index";

// Componentes
import Title from "./components/title";
import TopBar from "./components/TopBar";

interface TaskProps {
  id: number;
  title: string;
  description: string;
  concluded: boolean;
}

function App() {

  const task: TaskProps = {
    id: 1,
    title: "Título teste",
    description: "Descrição teste",
    concluded: false,
  };

  const [showTaskDetails, setShowTaskDetails] = useState(false)

  function onTaskClick(showTaskDetails:boolean) {
    setShowTaskDetails(!showTaskDetails)
    console.log(showTaskDetails)
  }

  return (
    <div className="bg-lightThemebody flex flex-col items-center py-24 w-full h-full">
      <div className="bg-white flex flex-col items-center h-[824px] rounded-[4px] py-10 px-25 shadow-2xl">
        <Title>TO-DO LIST</Title>
        <TopBar />
        <input type="text" />
        <div className="tasks flex flex-col w-full px-4 overflow-y-auto">
          <div className="task flex flex-col gap-5 w-full">
            <div className="taskText flex items-center gap-5">
              <button className="items-center justify-center hover:cursor-pointer hover:bg-lightThemeEmphasis duration-300 border-1 border-lightThemeEmphasis w-[32px] h-[32px]">
                {task.concluded ? <Icons.Checkmark /> : ""}
              </button>
              <button className="text-[24px] hover:cursor-pointer hover:text-lightThemeEmphasis duration-300" onClick={() => onTaskClick(showTaskDetails)}>{task.title}</button>
            </div>
            <div className={`task-details duration-1000 ${showTaskDetails? "" : "hidden"}`}>
              <p>
                {task.description}
              </p>
            </div>
            <hr className="text-gray" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
