
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { number } from 'yup/lib/locale';
import Api from '../../services/api/Summoner'
import maestria from '../../services/api/testandomaestria'

import champions from '../../services/champions/champions.json';

export const UserUsuario = () => {
  const location = useLocation()
  const [playerData, setPlayerData] = useState<any>([])
  const [maestriaData, setMaestriaData] = useState<any>([])

  const url = `/by-name/${location.state}`
  useEffect(() => {

    async function loadingPlayer() {
      try {
        const response = await Api.get(url)
        setPlayerData(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    loadingPlayer()
  }, [])

  const urlMaestria = `/by-summoner/${playerData.id}`

  useEffect(() => {
    async function loadingMaestria() {
      if (playerData.id) {
        const response = await maestria.get(urlMaestria)
        setMaestriaData(response.data)
      }
    }
    loadingMaestria()
  }, [playerData])

  const idChampion = maestriaData[0]?.championId
  const idChampionValue = String(idChampion)

  var contador = ''
  if (maestriaData) {
    for (const key in champions) {
      if (key === idChampionValue) {
        contador += (champions as any)[key]
      }
    }
  }

  return (

    <section className="w-full h-[50.3rem] bg-gray-900">

      {JSON.stringify(playerData) !== '{}' ?
        <div className="flex flex-row w-full justify-center items-center">
          <div className='mt-5'>
            <img width={100} height={100} src={"http://ddragon.leagueoflegends.com/cdn/12.14.1/img/profileicon/" + playerData.profileIconId + ".png"} alt="" />
          </div>
          <div className="ml-5">
            <h1 className="text-2xl text-white">{playerData.name}</h1>
            <p className="text-xl text-white">{"Level " + playerData.summonerLevel}</p>
          </div>
        </div>
        :
        <div>
          <p> error </p>
        </div>
      }
      <div className='w-full flex justify-center items-center flex-col'>
        {JSON.stringify(maestriaData) !== '{}' ?

          <div className="mt-10 w-[50%] flex flex-col  items-center">
            <div className="flex rounded-lg items-center justify-start w-full h-48 shadow-#0000007d shadow-xl bg-blue-600">
              <div className='mx-10'>
                <img className='rounded-full' width={150} height={150} src={"https://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/" + contador + ".png"} alt="" />
              </div>
              <div className=''>
                <p className='text-2xl text-gray-900 font-bold'> Mastery <span className=''>{maestriaData[0]?.championLevel} </span>  </p>
                {/* <p className='text-gray-900 font-bold text-2xl '>  Mastery Points <span className='text-yellow-500'> {maestriaData[0]?.championPoints} </span> </p> */}
                <p className='text-gray-900 font-bold text-2xl '>  Mastery Points <span className='text-yellow-500'> {new Intl.NumberFormat('pt-BR',
                  {
                  }).format(maestriaData[0]?.championPoints)} </span> </p>

              </div>
            </div>
          </div>

          :
          <div>
            <p> error </p>
          </div>
        }

      </div>
    </section>
  )
}
