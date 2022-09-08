import { useContext } from "react";
import { Footer, Header } from "../../shared/components/index";
import { AuthContext } from "../../shared/contexts/auth/AuthContext";

export const Perfil = () => {
const auth = useContext(AuthContext);

return( 
  <>
  <Header/>
  <div>
    pagina de perfil 
    {auth.user?.name}, chegou 
  </div>
  <Footer/>
  </>
)


}