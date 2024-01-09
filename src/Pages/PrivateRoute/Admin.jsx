import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Admin = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user.role === "admin") {
    return children;
  }
  <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default Admin;
