  import { useState } from 'react';
import Title from './Titel';
import Select from './Select';
import TextInput from './TextInput';
  const TaskForm = ({Tasks,setTasks}) => {
    const[visible, setVisible] = useState(false);
    const [FromData, setFormData] = useState({
      title: '',
      priority: 'low',
      category: 'work',
      description: '',
    });
    const handleChange = (e) => {
      setFormData({
        ...FromData,
        [e.target.name]: e.target.value,
      });
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!FromData.title || !FromData.description)  return alert('Please fill in all fields');
      const newTask = {...FromData, id: Date.now()};
      setTasks([newTask, ...Tasks]);
      setFormData({
        title: '',
        priority: 'low',
        category: 'work',
        description: '',
      });
    };


    return (
        <>
    <button className="w-full bg-indigo-500 text-white py-2 rounded-lg mb-4 hover:bg-green-600 cursor-pointer hover:bg-green-50" onClick={() => setVisible(!visible)}>
      {visible ? 'Hide Form' : 'Add a Task'}
    </button>
    {visible && (
      <form className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
        <Title label="Task Title" name="title" value={FromData.title} onChange={handleChange} />
        
            
          <Select label="Category" name="category" value={FromData.category} onChange={handleChange} options={[{name: 'work', value: 'Work'}, {name: 'personal', value: 'Personal'}, {name: 'ideas', value: 'Ideas'}]} />
          <Select label="Priority" name="priority" value={FromData.priority} onChange={handleChange} options={[{name: 'low', value: 'low'}, {name: 'medium', value: 'medium'}, {name: 'high', value: 'high'}]} />
         
   
       <TextInput label="Description" name="description" value={FromData.description} onChange={handleChange} />

        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
            type="button"
          >
            Add Task
          </button>
        </div>
      </form>
    )}
</>
  );

}
 
export default TaskForm;
