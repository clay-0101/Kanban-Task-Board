import { Home, KanbanSquare, X } from "lucide-react";

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Dark overlay*/}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer panel */}
      <aside
        className={`absolute left-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-6 overflow-hidden border-r border-white/5 bg-[#101010] p-3 transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Brand + close */}
        <div className="relative flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
            <KanbanSquare size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">TaskGrid</p>
            <p className="truncate text-xs text-neutral-500">Task Board</p>
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="relative">
          <p className="mb-2 px-2 text-xs text-neutral-500">Essentials</p>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black"
              >
                <Home size={17} />
                Home
              </a>
            </li>
          </ul>
        </nav>

        {/* User footer */}
        <div className="relative mt-auto flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-neutral-700 text-xs">CH</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm">Courtney Henry</p>
            <p className="truncate text-xs text-neutral-500">Developer</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileSidebar;