import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, isLoadingAuth } = useAuth();

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoadingAuth && user ? (
        <NavLink to="/new">new</NavLink>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">register</NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
