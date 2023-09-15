import { ISection, ISectionModal } from "@/lib/interfaces/form";
import axios from "axios";

async function createConfigApi<U,T>(type: string, data:T):Promise<U>{
    console.log("why not wprking", {data})
    const promise = await axios
    .post(`/config/${type}/`, data)
    .then((res)=>{
        console.log(res.data)
        return res.data
    })
    .catch((e)=>{
        const newError = e.res.data.message || ""
        throw new Error(newError)
    })
    return promise
}

export{
    createConfigApi
}