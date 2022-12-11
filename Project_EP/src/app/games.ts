export class Games {
    id?: number;
    name?: string;
    released?:string;
    background_image?: string ;
    stores?:Array<Stores>;
    parent_platforms?:Array<ParentPlatform>
    genres?: Array<Genre>;
    rating?:number;
}


export interface APIResponse<T>{
    games: Games[];
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
