import { FilterType } from "./filter-type";

export class Filter {


    constructor(
            public id:number,
            public type : string, 
            public filters : FilterType[],
        ){}
}
