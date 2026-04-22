const TextInput = ({ label, name, value, onChange }) => {
    return ( <>
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
            {label}
          </label>
<textarea
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  name={name}
  id={name}
  placeholder={`Enter ${label.toLowerCase()}`}
  onChange={onChange}
></textarea>
            
    
    
    </> );
}
 
export default TextInput;