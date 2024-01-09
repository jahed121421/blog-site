const Button = ({ name, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="transform rounded-lg bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
    >
      {name}
    </button>
  );
};

export default Button;
