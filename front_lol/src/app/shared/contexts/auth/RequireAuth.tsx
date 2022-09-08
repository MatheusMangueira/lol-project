import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
import { useEffect } from "react";

export const RequireAuth = ( { children }: { children: JSX.Element  } ) => {

  const auth = useAuthContext();
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth.user){
      navigate('/login');
    }}, []);
  
  return children;
}