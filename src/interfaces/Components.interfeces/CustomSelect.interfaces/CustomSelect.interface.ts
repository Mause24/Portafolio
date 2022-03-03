export interface ICustomSelect{
    OptionsBD:IOptionsSelect[],
    onlyIcon?:boolean,
    defaultOption?:string,
    width:1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
}
export interface IOptionsSelect{
    label:string,
    value:any
}




