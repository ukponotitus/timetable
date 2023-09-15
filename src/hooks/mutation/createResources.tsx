import { IForm, IFormData, IFormDataModal, IFormModal, ISection } from "@/lib/interfaces/form";
import { IMutationArgs, IMutationHook } from "@/lib/interfaces/query";
import { CreateResourcesAPi } from "@/pages/service/api/createResourse";
import { useCreateResources } from "../hleper/mutationhook";


export function useCreateForm ({onSuccess}: IMutationHook){
    const creatobject: IMutationArgs<IFormData, IFormDataModal> = {
        key:['timetable'],
        callback:(input: IFormDataModal) => CreateResourcesAPi(input),
        onSuccess: onSuccess,
    };
    return useCreateResources(creatobject)
}
