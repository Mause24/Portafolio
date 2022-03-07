export interface ICustomSelect{
    OptionsBD:IOptionsSelect[],
    defaultOption?:string,
    value:IOptionsSelect,
    width:1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    state?:boolean,
}
export interface IOptionsSelect{
    label:string,
    value:any
}




