import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { fetchCurrentUser, loginUser, logoutUser } from "../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: fetchCurrentUser,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const login = async (credentiol) => {
    await loginUser(credentiol);
    await queryClient.invalidateQueries(["auth", "me"]);
  };

  const logout = async (credentiol) => {
    await logoutUser();
    queryClient.setQueriesData(["auth", "me"], null);
    queryClient.removeQueries(["auth", "me"]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoadingAuth: isLoading,
        isAuthError: isError,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within Provider");

  return ctx;
};
