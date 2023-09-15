import * as React from "react"
import { ReactNode, createContext, useContext, useState,useEffect } from "react";
import {ILogin} from '../lib/interfaces/login/data'
import { ISignUp } from "@/lib/interfaces/signup/data";
import axios from "axios";
import { useRouter } from 'next/router'
import { setToken } from "@/pages/service/api/config";

interface AuthContextType{
    auth:any;
    UserLogin:(data: ILogin) => Promise<any>;
    UserSignUp:(data: ISignUp) => Promise<any>;
    logout:()=>void;
    islLoggedIn:boolean;

}


const usecontext = createContext<AuthContextType>({
    auth:{},
    UserLogin: async(data: any) =>{},
    UserSignUp: async(data: any) => {},
    logout:()=>{},
    islLoggedIn: false,
})

export default function Context({children}: {children: ReactNode}){
const [auth, setAuth] = React.useState({});
const [islLoggedIn, setILoggedIn] =React.useState(false)
    const router = useRouter();

   useEffect(() => {
      let tokens = JSON.parse(localStorage.getItem("token") || "{}");
      if(tokens){
          setToken(tokens?.key);
          setAuth(tokens);
              }
    }, []);

   
    const UserLogin = async(data: ILogin)=>{
      const Promise = await axios
      .post("/auth/login/", data)
      .then((res)=>{
        localStorage.setItem('token', JSON.stringify(res.data));
        setToken(res.data.key);
        setILoggedIn(true)
        console.log(res.data)
        router.push("/admin")
      })
      .catch((e)=>{
        const message = e.response?.data?.message|| "Network Error"
        throw new Error (message)
      })
      return Promise
    }

    // SignUp
    const UserSignUp = async (data: ISignUp)=>{
            return await axios
        .post("/auth/register/", data)
        .then((res)=>{
            localStorage.setItem('token', JSON.stringify(res.data));
            setToken(res.data.key);
            console.log(res.data)
            console.log(data)
            router.push("/login")
        })
        .catch((e)=>{
            const message = e.response?.data?.message||"Netwmork Error"
            throw new Error(message)
        })
    }
    // logout
    const logout = () => {
        localStorage.removeItem("token")
        setILoggedIn(false)
      };
    
    const value={
        auth,
        UserLogin,
        UserSignUp,
        logout,
        islLoggedIn,
        // isUserAuthenticated,

    }

    return(
        <usecontext.Provider value={value}>
            {children}
        </usecontext.Provider>

    )
}
const contextProvider = () => useContext(usecontext)
export {contextProvider}