import axios from "axios";
import { ReactNode } from "react"
axios.defaults.baseURL = "https://beeflash.pythonanywhere.com/"

export function setToken(token: string |null): void{
    axios.defaults.headers.common.Authorization = token? `Bearer ${token}` : "";
    axios.defaults.headers.common.Token= token ? `${token}` :"";

}
