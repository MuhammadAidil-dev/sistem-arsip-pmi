const Button = ({
  type = 'button',
  text = 'button',
  color = 'bg-primary',
  textColor = 'text-white',
}) => {
  return (
    <button
      type={type}
      className={`${color} ${textColor} w-full font-semibold text-sm py-2 px-4 rounded-sm cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
