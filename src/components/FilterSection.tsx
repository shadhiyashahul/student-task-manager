type FilterSectionProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

function FilterSection({
  filter,
  setFilter,
}: FilterSectionProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">
        Filters
      </h2>

      <div className="flex gap-3">
        <button
          onClick={() => setFilter("All")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          All
        </button>

        <button
          onClick={() => setFilter("Completed")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("Pending")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Pending
        </button>
      </div>

      <p className="mt-3">
        Current Filter:
        <span className="font-bold ml-2">
          {filter}
        </span>
      </p>
    </div>
  );
}

export default FilterSection;