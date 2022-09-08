import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../footer/Footer";


export const Inicio = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');

  function handleClickRedirect() {
    history('/usuario', { state: username })
  }

  return (
    <div className='h-[50.3rem] w-full bg-cover bg-repeat bg-[url(https://images2.alphacoders.com/559/thumb-1920-559456.jpg)]'>
    {
      <div className="flex justify-center items-center flex-col w-full h-full">

        <div className="p-2 flex flex-col items-center text-center ">
          {/* <img src="https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt804eabffbf15dc51/5f4defe95acde4265bb2da77/Champion_garen_HP.png" alt="logo" className="w-80 " /> */}
          <h1 className="text-5xl font-bold font-sans text-white "> Find Player </h1>
        </div>

        <div className="mt-4">
          <form >
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text" placeholder="summoner name" className=" text-xl w-96 p-4 border-none rounded-lg" />

            <button 
              type="submit" 
              className="p-4 bg-yellow-400 ml-2 hover:bg-yellow-600 text-center font-bold rounded-lg text-xl"
              onClick={handleClickRedirect}
            >
              Consult
            </button>
          </form>
        </div>
      </div>
      }
      <Footer />
      </div>
  );


}