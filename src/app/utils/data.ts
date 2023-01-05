export interface BROADCAST_COUNTRY{
    id?: number;
    name?: string;
    image?: string;
  }
export interface BROADCAST_LOCATION{
    id?: number; 
    name?: string;
    country?: BROADCAST_COUNTRY;
    description?: string;
}
export interface TIME_RANGE{
    id?: number;
    start?: string;
    end?: string;
}