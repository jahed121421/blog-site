import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import LoadingPage from "../Loading Page/LoadingPage";

const Bloger = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    <LoadingPage />;
  }
  if (user && user.role === "bloger") {
    return children;
  }
  <Navigate to="/login" replace={true} state={{ form: location }} />;
};

export default Bloger;
