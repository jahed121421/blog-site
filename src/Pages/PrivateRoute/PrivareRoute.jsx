import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import LoadingPage from "./../Loading Page/LoadingPage";

const PrivareRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingPage />;
  }

  if (user) {
    return children;
  }
  <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivareRoute;
