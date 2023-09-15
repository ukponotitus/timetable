import { ITimetableFilter } from "@/lib/interfaces/filter"
import axios from "axios"


const getTimeTableApi = async (filter:ITimetableFilter): Promise<any>=>{
    console.log("why not wprking")
    return await  axios
    .get("/timetable/", {params:filter} )
    .then((res)=>{
        console.log(res)
        return res.data
    })
    .catch((e)=>{
        const ErrorMsg = e.res.data.message || "Check your network"
        throw new Error(ErrorMsg)
    })
}

export{
    getTimeTableApi
}