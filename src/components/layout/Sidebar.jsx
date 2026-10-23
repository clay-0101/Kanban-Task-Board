import {
  Home, PanelLeftClose, PanelLeftOpen, KanbanSquare, Pencil, Check, X,
} from "lucide-react";
import useSideBar from "../../hooks/sidebarHook";

const Sidebar = () => {

 let {initials, startEdit, saveName,name, isOpen, setIsOpen, isEditing, setIsEditing, draft, setDraft}  =useSideBar()





  return (

    <aside
      className={`relative hidden lg:flex shrink-0 flex-col gap-6 overflow-hidden border-r border-white/5 bg-[#101010] p-3 h-screen sticky top-0 transition-[width] duration-200 ${isOpen ? "lg:w-64" : "lg:w-[72px]"
        }`}
    >

      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />


      <div
        className={`relative flex items-center rounded-xl border border-white/5 bg-white/[0.03] p-2.5 ${isOpen ? "gap-3" : "justify-center"
          }`}
      >
        {isOpen && (
          <>
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
              <KanbanSquare size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">TaskGrid</p>
              <p className="truncate text-xs text-neutral-500">Task Board</p>
            </div>
          </>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white"
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
        </button>
      </div>

      {/* Nav */}
      <nav className="relative">
        {isOpen && <p className="mb-2 px-2 text-xs text-neutral-500">Essentials</p>}
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className={`flex items-center rounded-lg bg-white px-3 py-2 text-sm font-medium text-black ${isOpen ? "gap-3" : "justify-center"
                }`}
            >
              <Home size={17} />
              {isOpen && "Home"}
            </a>
          </li>
        </ul>
      </nav>


      <div
        className={`relative mt-auto flex items-center rounded-xl border border-white/5 bg-white/[0.03] p-2.5 ${isOpen ? "gap-3" : "justify-center"
          }`}
      >
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-neutral-700 text-xs">
          {initials || "?"}
        </div>

        {isOpen &&
          (isEditing ? (
            <form onSubmit={saveName} className="flex min-w-0 flex-1 items-center gap-1">
              <input
                autoFocus
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                className="w-full min-w-0 rounded-md border border-white/10 bg-black/30 px-2 py-1 text-sm outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="rounded-md p-1 text-green-400 hover:bg-white/5"
                aria-label="Save name"
              >
                <Check size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="rounded-md p-1 text-neutral-400 hover:bg-white/5"
                aria-label="Cancel"
              >
                <X size={16} />
              </button>
            </form>
          ) : (
            <button
              onClick={startEdit}
              className="group flex min-w-0 flex-1 items-center gap-2 text-left"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm">{name}</p>
                <p className="truncate text-xs text-neutral-500">Developer</p>
              </div>
              <Pencil size={14} className="text-neutral-500 group-hover:text-white" />
            </button>
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;