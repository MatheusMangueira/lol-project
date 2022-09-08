import axios from "axios";

 const maestria = 
axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries'
})

maestria.interceptors.request.use((config) => {
    config.params = {
        api_key:'RGAPI-85c631f5-9915-49c6-a6a4-d996659fd4a5'
    }
    return config;
})

export default maestria