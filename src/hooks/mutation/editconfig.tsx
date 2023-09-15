import { ISection, ISectionModal } from "@/lib/interfaces/form";
import { IMutationArgs, IMutationHook } from "@/lib/interfaces/query";
import { useCreateResources } from "../hleper/mutationhook";
import { editResourcesApi } from "@/pages/service/api/getResources";

export function  useEditConfig<T,U >({onSuccess}: IMutationHook, type:string, id:string){
    const editobject:IMutationArgs<T, U>={
        key:["edit"],
        callback:(data)=>  {
            return editResourcesApi(id, data, type)
        },
        onSuccess:onSuccess
    }
    return useCreateResources(editobject)
}