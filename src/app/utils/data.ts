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

export interface Payment {
    author_uid?: string;
    author_email?: string;
    type?: string;
    value?: number;
    accountId?: string;
    accountName?: string;
    paymentKey?: string;
    campaign_name?: string;
    campaign_id?: number;
    paymentDate?: any;
    paymentDateString?: string;
    channel?: string;
    historyId?: string;
}