import { createContext, useContext } from "react";
import { AuthContextType } from "../../types/User";

export const AuthContext = createContext<AuthContextType>(null!);
export const useAuthContext = () => useContext(AuthContext);

