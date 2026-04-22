import Task from "./Task";

const TaskList = ({Tasks,deleteTask}) => {
    
    if (Tasks.length===0) {
        return  <>
        <div className="text-center text-gray-500 mt-10">
            <p>No tasks available.</p>
        </div>
        </>
    }
   return (<div className="space-y-4">{Tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
    ))}</div>);
}
 
export default TaskList;