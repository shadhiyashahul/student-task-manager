type TaskCardProps = {
  task: any;
  index: number;
  toggleStatus: (index: number) => void;
  deleteTask: (index: number) => void;
  editTask: (index: number) => void;
};

function TaskCard({
  task,
  index,
  toggleStatus,
  deleteTask,
  editTask,
}: TaskCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-bold">
        {task.taskName}
      </h3>

      <p>{task.description}</p>

      <p className="mt-2">
        <strong>Priority:</strong> {task.priority}
      </p>

      <p className="mt-2">
        <strong>Status:</strong>
        {task.completed ? " Completed" : " Pending"}
      </p>

      <div className="mt-4 flex gap-2">
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded"
          onClick={() => editTask(index)}
        >
          Edit
        </button>

        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => toggleStatus(index)}
        >
          Toggle Status
        </button>

        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;