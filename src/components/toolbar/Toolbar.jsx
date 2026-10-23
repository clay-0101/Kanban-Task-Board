import { Search, ChevronDown } from "lucide-react";
import useTaskForm from "../../hooks/taskFormHook";
import { setPriority, setSearch, setStatus } from "../../slices/filterSlice";

const Toolbar = () => {
 let {dispatch} = useTaskForm()
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-neutral-500 focus-within:border-blue-500 sm:max-w-xs">
        <Search size={16} />
        <input
        onChange={(e)=>{
          dispatch(setSearch(e.target.value))
        }}
          type="text"
          placeholder="Search tasks by title"
          className="w-full bg-transparent text-sm text-neutral-200 placeholder:text-neutral-500 outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:flex">
        <div className="relative">
          <select
          onChange={(e)=>{
            dispatch(setPriority(e.target.value))
          }}
            defaultValue="All"
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-3 pr-9 text-sm text-neutral-200 outline-none hover:bg-white/5 focus:border-blue-500 [color-scheme:dark]"
          >
            <option className="bg-[#161616] text-neutral-200" value="All">All priorities</option>
            <option className="bg-[#161616] text-neutral-200" value="Low">Low</option>
            <option className="bg-[#161616] text-neutral-200" value="Medium">Medium</option>
            <option className="bg-[#161616] text-neutral-200" value="High">High</option>
          </select>
          <ChevronDown
            size={15}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
          />
        </div>

        <div className="relative">
          <select
          onChange={(e)=>{
            dispatch(setStatus(e.target.value))
          }}
            defaultValue="All"
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-3 pr-9 text-sm text-neutral-200 outline-none hover:bg-white/5 focus:border-blue-500 [color-scheme:dark]"
          >
            <option className="bg-[#161616] text-neutral-200" value="All">All statuses</option>
            <option className="bg-[#161616] text-neutral-200" value="todo">To Do</option>
            <option className="bg-[#161616] text-neutral-200" value="in-progress">In Progress</option>
            <option className="bg-[#161616] text-neutral-200" value="completed">Completed</option>
          </select>
          <ChevronDown
            size={15}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;