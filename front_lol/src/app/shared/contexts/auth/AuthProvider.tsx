import { User } from "../../types/User";
import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { useLoginUser } from "../../services/api/LoginUser";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useLoginUser();

  const signin = async (email: string, password: string) => {
    const token = await api.signin(email, password);
    setUser(token)
    return true;
  }

  const signout = async () => {
      await api.logout();
      setUser(null);
      setToken('');
  }

  const setToken = (accessToken: string) => {
    localStorage.setItem('Token', accessToken);
  }


  return (
    <AuthContext.Provider value={{ user, signin, signout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}