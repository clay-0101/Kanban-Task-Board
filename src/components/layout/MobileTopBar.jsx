import { KanbanSquare, Menu } from "lucide-react";


const MobileTopbar = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between border-b border-white/5 bg-[#101010] px-4 py-3 lg:hidden">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500 text-sm font-semibold"> <KanbanSquare size={18} /></div>
        <span className="text-sm font-medium">TaskGrid</span>
      </div>
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-neutral-400 hover:bg-white/5"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>
    </header>
  );
};

export default MobileTopbar;