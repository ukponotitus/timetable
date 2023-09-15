import { IForm } from "@/lib/interfaces/form";
import { IMutationArgs, IMutationHook, IQueryArgs } from "@/lib/interfaces/query";
import { getResourcesApi } from "@/pages/service/api/getResources";
import { useGetResourcesQuery } from "../hleper/query";

export function useGetResources<T>(type: string){
  const dataobject: IQueryArgs <string, T[]> ={
        key:[`data/${type}`],
        callback:() => getResourcesApi(type)
    }
    return useGetResourcesQuery(dataobject)
}