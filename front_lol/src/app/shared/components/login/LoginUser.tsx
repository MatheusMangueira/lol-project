import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/auth/AuthContext";
import Logo from "../../hooks/logoLOL.png";


export const LoginUser = () => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }
  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      console.log('if', email, password)
      if (isLogged === true) {
        console.log(isLogged)
        navigate('/perfil');;
      }
    } else {
      alert('Usuário e/ou senha inválidos');
    }
  }

  return (
    <div className=" h-[50.3rem] bg-gray-900 flex justify-center items-center flex-col">
      <img src={Logo} alt="logo" className="mb-10 w-96" />
      <form className=" h-[30rem] w-2/6 bg-gray-800 rounded-lg"
        onSubmit={handleSubmit}>

        <div className="h-full w-full flex justify-center flex-col items-center">
          <h1 className="text-white text-3xl mb-10"> Login </h1>

          <div className="">
            <label className="block text-white"> Email </label>
            <input type="email" placeholder="Email"
              className="w-96 p-2 mb-3 "
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }} />
            <label className="block text-white"> Password </label>
            <input type="password" className="w-96 mb-3 p-2" placeholder="Password"
              value={password}
              onChange={e => {
                setPassword(e.target.value)
              }} />
          </div>
          <button onClick={handleLogin} type="submit" className="h-10 w-96 mt-5 cursor-pointer duration-500 bg-blue-400 hover:bg-blue-600 rounded-lg font-bold text-xl"> Login </button>
        </div>
      </form >
    </div>
  )
}