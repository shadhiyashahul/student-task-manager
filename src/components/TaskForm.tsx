import { useState, useContext } from "react";
import TaskList from "./TaskList";
import FilterSection from "./FilterSection";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [filter, setFilter] = useState("All");

  const { tasks, setTasks } = useContext(TaskContext);

  const addTask = () => {
    if (taskName.trim() === "") {
      alert("Please enter a task name");
      return;
    }

    const newTask = {
      taskName,
      description,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setDescription("");
    setPriority("Low");
  };

  const editTask = (index: number) => {
    const task = tasks[index];

    setTaskName(task.taskName);
    setDescription(task.description);
    setPriority(task.priority);

    setEditIndex(index);
    setIsEditing(true);
  };

  const updateTask = () => {
    if (editIndex === null) return;

    const updatedTasks = [...tasks];

    updatedTasks[editIndex] = {
      ...updatedTasks[editIndex],
      taskName,
      description,
      priority,
    };

    setTasks(updatedTasks);

    setTaskName("");
    setDescription("");
    setPriority("Low");

    setEditIndex(null);
    setIsEditing(false);
  };

  const toggleStatus = (index: number) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task: any) => {
    if (filter === "Completed") {
      return task.completed;
    }

    if (filter === "Pending") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        Add Task
      </h2>

      <input
        className="w-full border rounded-lg p-3 mb-4"
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <textarea
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <select
        className="w-full border rounded-lg p-3 mb-4"
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      {isEditing ? (
        <button
          onClick={updateTask}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Update Task
        </button>
      ) : (
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Task
        </button>
      )}

      <hr className="my-6" />

      <FilterSection
        filter={filter}
        setFilter={setFilter}
      />

      <hr className="my-6" />

      <TaskList
        tasks={filteredTasks}
        toggleStatus={toggleStatus}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default TaskForm;