import { IQueryArgs } from "../../lib/interfaces/query";
import { useQuery } from "@tanstack/react-query";

export function useGetResourcesQuery<IArg, IReturn>({ callback, key }: IQueryArgs<IArg, IReturn>) {
    const { status, data, isLoading, error } = useQuery(key, (arg) => {
      return callback && callback(arg);
    });
  return { data, status, loading: isLoading, error };
  }