const Select = ({label,value,name, onChange, options}) => {
    return (<>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        className="   w-full  py-2 border rounded-lg "
        onChange={onChange}
        id={name}
        name={name}
        value={value}
      >
        
        {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
    </>  );
}
 
export default Select;