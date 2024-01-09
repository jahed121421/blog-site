import { NavLink } from "react-router-dom";

const ActiceLink = ({ name, to, end }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive
            ? " font-semibold text-blue-500"
            : "my-2 transform transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
        } md:mx-4 md:my-0`
      }
      to={to}
      end={end}
    >
      {name}
    </NavLink>
  );
};

export default ActiceLink;
