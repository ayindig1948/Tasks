const Title= ({label,value,name, onChange}) => {
    return (<>
      <h2 className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
            {label}
          </h2>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onChange}
            name={name}
            type="text"
            placeholder="Enter your task title"
           value={value}
          />
    
    </>  );
}
 
export default Title;