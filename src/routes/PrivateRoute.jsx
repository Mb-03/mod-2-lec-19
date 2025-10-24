import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ childen }) => {
  const { user, isLoadingAuth } = useAuth();

  if (isLoadingAuth) return <div>Loading ...</div>;
  return user ? childen : <Navigate to="/login" replace />;
};

export default PrivateRoute;
