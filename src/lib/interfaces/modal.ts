import { ISection } from "./form";

export interface IModal<T>{
    open: boolean;
    onClose: () => void,
    // handleClose:()=> void,
    // modalsIsOpen: boolean;
    // isOnClose: () => void,
    item?:T,
    // firstForm:any,
    // title:string
}

export interface IClasses{
    slot:string,
    courseCode:string,
    courseDesc:string,
    venueName:string,
    venueCode:string,
    value:any,
}

export interface IVenue{
    Venue:string,
    id:number}
  
export interface ICode{
      Code:string,
      id:number}

 export interface ISlot{
        Slot:string,
        id:number}

        export interface ISecondForm{
            day:string,
            course:string,
            venue:string,
            time:string,
        }