import { ClipboardList } from "lucide-react";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks }) => {
  return (
    <section className="flex w-[85%] shrink-0 snap-center flex-col gap-3 rounded-2xl border border-white/5 bg-[#101010] p-3 sm:w-80 md:w-auto md:shrink">
      <header className="flex items-center justify-between px-1 pt-1">
        <div>
          <h2 className="text-base font-medium">{title}</h2>
          <p className="text-xs text-neutral-500">{tasks.length} cards</p>
        </div>
      </header>

      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/10 px-4 py-10 text-center">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-neutral-500">
            <ClipboardList size={18} />
          </div>
          <p className="text-sm font-medium text-neutral-300">No tasks yet</p>
          <p className="text-xs text-neutral-500">Tasks in {title} will show up here.</p>
        </div>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </section>
  );
};

export default Column;