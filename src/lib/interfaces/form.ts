export interface ICodeName{
    courseCode:string,
    title:string,
    id:number,
    courseDesc:string,
}
export interface IForm{
    day:string,
    Slot:string,
    section:string,
    programme:string,
    semester:string,
    courseCode:string,
    courseDesc:string,
    venueName:string,
    venueCode:string,
}

export interface IFormItem {
    // name: ReactNode;
    day: number;
    course: number;
    venue: number;
    slot: number;
  }
  
  export interface IFormData {
    section: number;
    semester: number;
    programme: number;
    items: IFormItem[];
  }

  
  export interface IFormDataModal {
    section: number;
    semester: number;
    programme: number;
    items: IFormItem[];
  }
  export interface IFormTimetable {
    id:number;
    // name: ReactNode;
    day: ISection;
    course: ICourses;
    venue: IVenues;
    slot: ISection;
  }
  export interface ITimetabel {
    id:number;
    section: ISection;
    semester: ISection;
    programme: ISection;
    items: IFormTimetable[];
    created_at: string;
  }
  
export interface IFormModal{
    section:string,
    programme:string,
    semester:string,
    courseCode:string,
    courseDesc:string,
    venueName:string,
    venueCode:string,
}

export interface ISection{
    name:string;
    id:number;
}
export interface ISectionModal{
  name:string;
  id:number;
}

export interface ISingleConfigCreate{
  name:string;
}
export interface ISingleConfigGet{
  id:number;
  code:string;
}
export interface IMultiConfigCreate{
  name:string;
  code:string;
}
export interface IMultiConfigGet{
  name:string;
  code:string;
  id:number;
}

export interface IVenues{
  id:number;
  name:string;
  code:string;
}
export interface IFormFirst{
    section:number,
    programme:number,
    semester:number,
}
export interface ICourses{
  id:number;
  name:string;
  code:string;
}
