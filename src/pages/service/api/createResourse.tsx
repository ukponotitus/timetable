import { IForm, IFormData, ISection } from "@/lib/interfaces/form";
import axios from "axios";

const CreateResourcesAPi = async (input: IFormData) => {
    // console.log("why not wprking")
    return await axios
    .post("/timetable/", input)
    .then((res)=>{
        console.log(res.data)
        return(res.data)
    })
    .catch((e)=>{
        const errorMsg = e.res?.data?.message || "check Your network";
        throw new Error(errorMsg)
    })
    // return Creates
}

export{
    CreateResourcesAPi,
}
