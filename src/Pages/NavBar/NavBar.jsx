import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ActiceLink from "../../Components/ActiveLink/ActiceLink";
import Button from "../../Components/Button/Button";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const [isOpen, setIsopen] = useState(false);
  const { user, SignOut } = useContext(AuthContext);
  const LogOut = () => {
    SignOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="h-6 w-auto sm:h-7"
              src="https://th.bing.com/th?id=OIF.%2bi%2f6W93Su5dgORPynfNrFA&rs=1&pid=ImgDetMain"
              alt=""
            />
          </Link>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  onClick={() => setIsopen(!isOpen)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setIsopen(!isOpen)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen
              ? "translate-x-0 opacity-100 "
              : "-translate-x-full opacity-0"
          } absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100 dark:bg-gray-800`}
        >
          <div className="flex flex-col md:mx-6 md:flex-row">
            <ActiceLink name="Home" to="/"></ActiceLink>
            <ActiceLink name="Blog" to="/Blog"></ActiceLink>
            <ActiceLink name="Contact" to="/contact"></ActiceLink>
            <ActiceLink name="About" to="/about"></ActiceLink>
            {user && (
              <ActiceLink name="Dash-Board" to="/dashboard"></ActiceLink>
            )}
          </div>

          <div className="flex justify-center md:block">
            {user ? (
              <Button onclick={LogOut} name="Logout" />
            ) : (
              <Link to="/login">
                <Button name="Login" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
