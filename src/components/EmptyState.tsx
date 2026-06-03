function EmptyState() {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700">
        No Tasks Found
      </h2>

      <p className="text-gray-500 mt-2">
        Add a task to get started.
      </p>
    </div>
  );
}

export default EmptyState;