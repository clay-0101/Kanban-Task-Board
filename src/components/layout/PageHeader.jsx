import { Plus } from "lucide-react";

const PageHeader = ({ onAddClick }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm text-neutral-500">Tasks</p>
        <h1 className="text-3xl font-medium sm:text-4xl">Kanban Task Board</h1>
      </div>
      <button
        onClick={onAddClick}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-neutral-200 sm:w-auto"
      >
        <Plus size={16} />
        Add task
      </button>
    </div>
  );
};

export default PageHeader;