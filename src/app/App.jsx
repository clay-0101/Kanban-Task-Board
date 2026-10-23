

import { useState } from "react";
import Board from "../components/board/Board";
import MobileSidebar from "../components/layout/MobileSidebar";
import MobileTopbar from "../components/layout/MobileTopBar";
import PageHeader from "../components/layout/PageHeader";
import Sidebar from "../components/layout/Sidebar";
import Toolbar from "../components/toolbar/Toolbar";
import TaskForm from "../components/toolbar/TaskForm";
import { useDispatch } from "react-redux";
import { setIsFromOpen } from "../slices/formSlice";


const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100">
      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <MobileTopbar onMenuClick={() => setIsMobileMenuOpen(true)} />
          <MobileSidebar
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
          <main className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
            <PageHeader onAddClick={() => dispatch(setIsFromOpen())} />
            <Toolbar />
            <Board />
          </main>
        </div>
      </div>

      <TaskForm  />
    </div>
  );
}

export default App;