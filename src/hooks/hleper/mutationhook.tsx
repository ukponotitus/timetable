import { ISection } from "@/lib/interfaces/form";
import { IMutationArgs} from "@/lib/interfaces/query";
import { CreateResourcesAPi } from "@/pages/service/api/createResourse";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";


export function useCreateResources<IArg, IReturn>({ callback, key, onSuccess }: IMutationArgs<IArg, IReturn>) {
    const queryClient =useQueryClient();
    return useMutation(
      (data: IArg) => {
        return callback && callback(data);
      },
      {
        onSuccess: (data) =>{
          queryClient.invalidateQueries(key);
          onSuccess && onSuccess(data);
        },
      }
    );
  }



