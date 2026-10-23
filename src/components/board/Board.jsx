import Column from "./Column";
import { statuses } from "../Dummy";
import { useSelector } from "react-redux";
import useTaskForm from "../../hooks/taskFormHook";


const Board = () => {
//  let tasks =  useSelector((state)=> state.tasks.tasks)
let {filteredData} = useTaskForm()
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
      {statuses.map((status) => (
        <Column
          key={status.id}
          title={status.title}
          tasks={filteredData.filter((task) => task.status === status.id)}
        />
      ))}
    </div>
  );
};

export default Board;