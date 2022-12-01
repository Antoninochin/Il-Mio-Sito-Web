export class Games {
    id?: number;
    name?: string;
    released?:string;
    background_image?: string;
    stores?:string;
    platforms?:string;
    genres?: Array<Genre>
}

interface Genre{
    name: string
}

export interface APIResponse<T>{
    results: Array<T>;
}
