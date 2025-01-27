import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { TaskContextProvider } from "./contexts/TaskContextProvider";

const App = () => {
  return (
    <TaskContextProvider>
      <div className="container">
        <TaskForm />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
};

export default App;
