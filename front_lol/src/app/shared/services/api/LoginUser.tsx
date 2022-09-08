import { registro } from "./Register";

export const useLoginUser = () => {
  
  return {
  signin: async (email: string, password: string) => {
       const response = await registro.post('api/auth/login', { email, password });
       if(response){
         let token = response.data.accessToken; 
         localStorage.setItem('Token', token);
        return token;
       }
    return ;
  },

  logout: async () => {
    const response = await registro.post('api/auth/login');
    return response.data;
  }
}};

