import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";

import { registro } from "../../services/api/Register";
import Logo from "../../hooks/logoLOL.png";
import { schema } from "./Validation";
import { useState } from "react";

export const UserCadastro = () => {

  const [validateRegistration, setValidateRegistration] = useState(true);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),

  });

  const addPost = (data: any) => {
    registro.post('/users', data)
      .then(() => {
        if (data) {
          setValidateRegistration(false)
        }
      })
      .catch((error) => {
        console.log( error)
      })

  }

  return (
    <div className=" h-[50.3rem] bg-gray-900 flex justify-center items-center flex-col">

      <img src={Logo} alt="logo" className="mb-10 w-96" />
      {
        validateRegistration ?

          <form onSubmit={handleSubmit(addPost)} className=" h-[30rem] w-2/6 bg-gray-800 rounded-lg flex justify-center flex-col items-center ">

            <>
              <h1 className="text-white text-2xl mb-5"> Make your registration </h1>

              <div className="">
                <label className="block text-white"> Name </label>
                <input type="text" className="w-96 mb-3 p-2" placeholder="Name"
                  {...register("name")} />
                <div className="text-red-600 text-sm">
                  <>
                    {errors.name?.message}
                  </>
                </div>

                <label className="block text-white"> Email </label>
                <input type="email" placeholder="Email"
                  className="w-96 p-2 mb-3 "
                  {...register("email")} />

                <div className="text-red-600 text-sm">
                  <>
                    {errors.email?.message}
                  </>
                </div>

                <label className="block text-white"> Password </label>
                <input type="password" className="w-96 mb-3 p-2" placeholder="Password"
                  {...register("password")} />

                <div className="text-red-600 text-sm">
                  <>
                    {errors.password?.message}
                  </>
                </div>

              </div>
              <button type="submit" className="h-10 w-96 mt-5 cursor-pointer bg-blue-400 hover:bg-blue-600 duration-500 rounded-lg font-bold text-xl"> Register </button>
            </>
          </form >
          :
          <div className="bg-gray-800 rounded-lg w-[30%] h-[50%] flex flex-col justify-center items-center ">
            <div className="mb-2">
              <h1 className="text-3xl text-white"> Registration successful! </h1>
            </div>
            <img className=" mb-5 rounded-full w-[10rem] h-[10rem]" src="https://icon-library.com/images/league-of-legends-icon-transparent/league-of-legends-icon-transparent-26.jpg" alt="" />
            <Link to={"/login"}  className="text-gray-800 bg-stone-300 duration-500  rounded-lg hover:bg-blue-400 font-bold text-lg p-2">
          Login
         </Link>
          </div>
      }
    </div >
  );
}