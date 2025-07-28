// Componentes
import Title from "./components/Title";
import TopBar from "./components/TopBar";
import Task from "./components/Task";

export interface TaskProps {
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

  return (
    <div className="bg-lightThemebody flex flex-col items-center py-24 w-full h-full">
      <div className="bg-white flex flex-col items-center h-[824px] rounded-[4px] py-10 px-25 shadow-2xl">
        <Title>TO-DO LIST</Title>
        <TopBar />
        <input type="text" />
        <div className="tasks flex flex-col w-full px-4 overflow-y-auto">
          <Task task={task}/>
        </div>
      </div>
    </div>
  );
}

export default App;
