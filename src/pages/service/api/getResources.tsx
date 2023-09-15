import { IForm } from "@/lib/interfaces/form"
import axios, { AxiosRequestConfig } from "axios"

const getResourcesApi = async (type:string): Promise<any>=>{
    // console.log("why not wprking")
    return await  axios
    .get(`/config/${type}`)
    .then((res)=>{
        return res.data
    })
    .catch((e)=>{
        const ErrorMsg = e.res.data.message || "Check your network"
        throw new Error(ErrorMsg)
    })
}

async function editResourcesApi<U,T>(id:string, data:T, type: string, ):Promise<U>{
    return await axios
    .put(`/config/${type}/${id}`, data )
    .then((res)=>{
        console.log(res.data)
        return res.data
    })
    .catch((e)=>{
        const editError= e.res.data.message || "Check your network"
        throw new Error(editError)
    })
}

const deleteResourcesApi = async(id: any)=>{
    return await axios
    .delete(`/config/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((e)=>{
        const editError= e.res.data.message || "Check your network"
        throw new Error(editError)
    })
}

export {
    getResourcesApi,
    editResourcesApi,
    deleteResourcesApi
}