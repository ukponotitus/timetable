import { IForm, ITimetabel } from "@/lib/interfaces/form";
import { IAPIFilter, IMutationArgs, IMutationHook, IQueryArgs } from "@/lib/interfaces/query";
import { useGetResourcesQuery } from "../hleper/query";
import { getTimeTableApi } from "@/pages/service/gettimetable";
import { ITimetableFilter } from "@/lib/interfaces/filter";

export function useGetTimeTableApi(filter:ITimetableFilter){
    console.log("timetable")
  const timetabelobject: IQueryArgs <string, ITimetabel[]> ={
        key:["timetabel", filter as IAPIFilter],
        callback:() => getTimeTableApi(filter)
    }
    return useGetResourcesQuery(timetabelobject)
}