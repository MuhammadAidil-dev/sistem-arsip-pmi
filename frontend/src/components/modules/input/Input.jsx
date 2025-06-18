const Input = ({
  label = '',
  name = '',
  type = 'text',
  value = '',
  placeholder = '',
  required = false,
  setValue = () => {},
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-base font-semibold text-dark">
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="focus:outline-none border border-slate-300 py-2 px-4 text-dark text-sm rounded-sm focus:border-primary transition-colors"
      />
    </div>
  );
};

export default Input;
