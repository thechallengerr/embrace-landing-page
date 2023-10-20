export interface productInterface {
    id: string;
    name: string;
    description: string;
    price: number;
    tag: string;
    saleOff?: number;
    forGender:string | "men" | "women" 
}