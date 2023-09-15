import { ISection, ISectionModal } from "@/lib/interfaces/form";
import { IMutationArgs, IMutationHook } from "@/lib/interfaces/query";
import { createConfigApi } from "@/pages/service/api/createconfig";
import { useCreateResources } from "../hleper/mutationhook";
// import { type } from "os";

export function  useCreateConfig<T,U >({onSuccess}: IMutationHook, type:string){
    const createobject:IMutationArgs<T, U>={
        key:["config"],
        callback:(data)=>  {
            console.log({data})
            return createConfigApi(type, data)
        },
        onSuccess:onSuccess
    }
    return useCreateResources(createobject)
}