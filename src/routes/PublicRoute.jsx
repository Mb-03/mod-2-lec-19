import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ childen }) => {
  const { user, isLoadingAuth } = useAuth();

  if (isLoadingAuth) return <div>Loading ...</div>;
  return !user ? childen : <Navigate to="/" replace />;
};

export default PublicRoute;
