import * as React from "react"
import { ReactNode, createContext, useContext, useState } from "react";
import {ILogin} from '../lib/interfaces/login/data'
import { ISignUp } from "@/lib/interfaces/signup/data";

interface AuthContextType{
    auth:any;
    UserLogin:(data: ILogin) => Promise<any>;
    UserSignUp:(data: ISignUp) => Promise<any>
}


const usecontext = createContext<AuthContextType>({
    auth:{},
    UserLogin: async(data: any) =>{},
    UserSignUp: async(data: any) => {},
})

export default function Context({children}: {children: ReactNode}){
    const [auth, setAuth] = React.useState({})

    // Login
    const UserLogin = async()=>{
      const Promise = await axios
      .post("/")
      .then((res)=>{
        console.log(res.data)
      })
      .catch((e)=>{
        const message = e.response?.data?.message|| "Network Error"
        throw new Error (message)
        console.log(e)
      })

      return Promise
    }


    // SignUp
    const UserSignUp = async ()=>{
            return await Axios
        .post("")
        .then((res)=>{
            console.log(res)
        })
        .catch((e)=>{
            const message = e.response?.data?.message||"Netwmork Error"
            throw new Error(message)
        })

    }
    const value={
        auth,
        UserLogin,
        UserSignUp
    }

    return(
        <usecontext.Provider value={value}>
            {children}
        </usecontext.Provider>

    )
}
const contextProvider = () => useContext(usecontext)
export {contextProvider}