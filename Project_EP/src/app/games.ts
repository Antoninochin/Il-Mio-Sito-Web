export class Games {
    id?: number;
    name?: string;
    released?:string;
    background_image?: string ;
    stores?:Array<Stores>;
    parent_platforms?:Array<ParentPlatform>
    genres?: Array<Genre>;
    rating?:number;
    like?: any
}


export interface APIResponse<T>{
    results: Array<T>;
}
interface Genre{
    name: string
}

interface ParentPlatform{
    platform:{
        name:string;
    }
}
interface Stores{
    store:{
        name:string;
    }
}
