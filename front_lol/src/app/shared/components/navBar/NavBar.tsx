import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";

export const NavBar = () => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }
  return (
    <div className="flex flex-row">
      <Link to={"/pagina-inicial"} className='text-white duration-500 hover:text-blue-400 font-bold text-lg p-2 mx-2'> Home </Link>
      <Link to={"/sobre"} className='text-white duration-500 hover:text-blue-400 font-bold text-lg p-2 mx-2'> About </Link>
      <Link to={"/login"} className='bg-stone-300 duration-500 hover:bg-blue-400 p-2 text-lg font-bold rounded-lg mx-2'> Login </Link>
      {!auth.user && <Link to={"/cadastro"} className='bg-stone-300 duration-500 hover:bg-blue-400 p-2 text-lg font-bold rounded-lg mx-2'> Register </Link>}
      {auth.user && <button className='bg-stone-300 duration-500 hover:bg-blue-400 p-2 text-lg font-bold rounded-lg mx-2' onClick={handleLogout} > Logout </button>}
    </div>
  );
}