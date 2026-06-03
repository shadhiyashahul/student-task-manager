import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Header />
      <TaskForm />
    </TaskProvider>
  );
}

export default App;