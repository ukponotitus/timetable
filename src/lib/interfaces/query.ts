export interface IAPIFilter {
    // page?: number;
    [index: string]: string | number | undefined;
  }
  
  export interface IMutationArgs<IArg, IReturn> {
    key: [string, IAPIFilter?];
    callback: (arg: IArg) => Promise<IReturn>;
    onSuccess?: (data?: IReturn) => void;
  }
  
  export interface IQueryArgs<IArg, IReturn> {
    key: [string, IAPIFilter?];
  
    callback: (arg?:unknown) => Promise<IReturn>;
  }
  
//   export interface IPaginatedQueryArgs<IReturn> {
//     key: [string, IAPIFilter?];
//     callback: (arg: unknown) => Promise<IPaginatedReturns<IReturn>>;
//   }
  
  export interface IMutationResponse <IArg = unknown, IReturn = unknown> {
    mutate: unknown;
    status: string;
  }
  export interface IQueryResponse<IReturn = unknown> {
    data?: IReturn;
    status: string;
  }
  
//   export interface IPaginatedReturns<IReturn = unknown> {
//     count(count: any): unknown;
//     data: IReturn;
//     pagination: {
//       limit: number;
//       page: number;
//       count: number;
//     };
//   }
  
  export interface IMutationHook<IReturn = unknown> {
    onSuccess?: (data?: IReturn) => void;
    onError?: () => void;
    onSettled?: () => void;
  }
  