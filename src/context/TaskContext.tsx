import {
  createContext,
  useState,
  useEffect,
} from "react";

export const TaskContext = createContext<any>(null);

export const TaskProvider = ({
  children,
}: any) => {
  const [tasks, setTasks] = useState<any[]>(() => {
    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};