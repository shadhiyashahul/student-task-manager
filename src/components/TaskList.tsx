import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";
type TaskListProps = {
  tasks: any[];
  toggleStatus: (index: number) => void;
  deleteTask: (index: number) => void;
  editTask: (index: number) => void;
};

function TaskList({
  tasks,
  toggleStatus,
  deleteTask,
  editTask,
}: TaskListProps) {
    if (tasks.length === 0) {
  return <EmptyState />;
}
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
  Task List
</h2>

      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          index={index}
          toggleStatus={toggleStatus}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;