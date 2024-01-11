import { Outlet } from "react-router-dom";
import BannerDisplay from "./../../Components/BannerDisplay/BannerDisplay";
import ActiceLink from "../../Components/ActiveLink/ActiceLink";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const DashBoard = () => {
  const { SignOut } = useContext(AuthContext);
  return (
    <div className="w-full text-white">
      <BannerDisplay
        title="Dash Board"
        src="https://th.bing.com/th/id/R.d58339de61b5d07fd4db988f8e8a7cdd?rik=SfZdJyKhxDm1VQ&pid=ImgRaw&r=0"
      />
      <div className="flex h-[600px] w-full overflow-hidden text-center ">
        <div className="h-full w-4/12  bg-blue-950 pb-5  pt-10 text-sm font-bold lg:text-xl">
          <div>
            <h1 className=" pt-10 text-xl font-bold">
              <span>Welcome</span> <br />
              User Role
            </h1>
            <ul className="my-5 flex flex-col gap-2 capitalize">
              <ActiceLink name="Home" to="/"></ActiceLink>
              <ActiceLink
                name="Dashboard"
                end="end"
                to="/dashboard"
              ></ActiceLink>
              <ActiceLink name="Add Item" to="/dashboard/add-item"></ActiceLink>
              <ActiceLink
                name="Manage Post"
                to="/dashboard/manage-post"
              ></ActiceLink>
              <ActiceLink
                name="Manage User"
                to="/dashboard/manage-user"
              ></ActiceLink>
              <ActiceLink
                name="Manage Own Post"
                to="/dashboard/manage-own-post"
              ></ActiceLink>
              <ActiceLink
                name="Manage Comment"
                to="/dashboard/manage-comment"
              ></ActiceLink>
              <ActiceLink name="Favorit" to="/dashboard/favorit"></ActiceLink>
            </ul>
            <div>
              <button
                onClick={SignOut}
                className="transform rounded-sm bg-blue-600 px-2 py-1 font-thin capitalize tracking-widest text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-8/12 text-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
