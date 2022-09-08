import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Dashboard, Sobre, Login, Cadastro, Usuario, Perfil } from "../pages";
import { RequireAuth } from "../shared/contexts/auth/RequireAuth";

export const Routes = () => {

    return (
        <BrowserRouter>
        <Switch>
            <Route path="*" element= {<Navigate to="/pagina-inicial" /> } />
            <Route path="/pagina-inicial" element={<Dashboard/>} />
            <Route path="/sobre" element={<Sobre/>} /> 
            <Route path="/login" element={<Login/>} />
            <Route path="/perfil" element={<RequireAuth><Perfil/></RequireAuth>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/usuario" element={< Usuario />}/>
        </Switch>
        </BrowserRouter>
    );
}