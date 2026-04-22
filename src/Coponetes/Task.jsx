const Task = ({ task, deleteTask }) => {
    return (
        <div key={task.id} className="bg-white p-4 rounded-lg shadow border-l-4"style={{
            borderLeftColor: task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'yellow' : 'green'
        }}>       
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-gray-500">Category: {task.category}</p>
         <p className="text-gray-500">Priority: {task.priority}</p>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-gray-400">Created at: { new Date(task.id).toLocaleString()   }</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
       
      );

}
 
export default Task;
