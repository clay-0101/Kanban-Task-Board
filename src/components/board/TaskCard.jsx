import { Flag, Pencil, Trash2 } from "lucide-react";
import PriorityBadge from "./PriorityBadge";
import useTaskForm from "../../hooks/taskFormHook";
import { deleteTask } from "../../slices/taskSlice";
import { setDefaultValue, setIsFromOpen } from "../../slices/formSlice";

const TaskCard = ({ task }) => {
  const {id, title, description, priority, dueDate } = task;
   let {dispatch} =  useTaskForm()

  return (
  
    <article className="rounded-2xl border border-white/5 bg-[#161616] p-4 transition-colors hover:border-white/15">
      {/* Top: priority */}
      <PriorityBadge priority={priority} />

      {/* Content */}
      <h3 className="mt-3 text-[15px] font-medium leading-snug">{title}</h3>
      <p className="mt-1.5 line-clamp-2 text-xs text-neutral-500">{description}</p>

      {/* Footer: due date + edit/delete */}
      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
        <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1 text-xs text-neutral-300">
          <Flag size={12} /> {dueDate}
        </span>

        <div className="flex items-center gap-1">
          <button
          onClick={()=>{
            dispatch(setDefaultValue(task))
            dispatch(setIsFromOpen())
          }}
           className="rounded-lg p-1.5 text-neutral-500 hover:bg-white/5" aria-label="Edit">
            <Pencil size={14} />
          </button>
          <button 
          onClick={()=>{
            dispatch(deleteTask({id}))
          }}
          className="rounded-lg p-1.5 text-neutral-500 hover:bg-white/5" aria-label="Delete">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;