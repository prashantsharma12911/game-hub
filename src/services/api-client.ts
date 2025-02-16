import axios, { AxiosRequestConfig } from "axios";

export interface Response<T>{
    count : number;
    next? : string | null;
    results : T[];
}

const axiosInstance =  axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '688db6a417a94dcaba4ca9fb2288fdc0'
    }
});

class APIClient<T>{
    endpoint : string;

    constructor(endpoint : string){
        this.endpoint = endpoint;
    }

    // IF WE DO NOT DECLARE FUNCTION LIKE THIS THEN this.endpoint will not work
    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance.get<Response<T>>(this.endpoint,config).then(res => res.data);
    }
}

export default APIClient;