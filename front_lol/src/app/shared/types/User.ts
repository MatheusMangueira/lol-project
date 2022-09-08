export interface User{
  id: number;
  name: string;
  email: string;
  password?: string; 
}


export interface AuthContextType {
  user: User | null;
  signin: (email:string, password:string) => Promise<boolean>;
  signout: () => void;
  setUser: (user: User | null) => void;

}
