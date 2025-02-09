import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import genres from "../data/genres";

export interface Genre{
    id : number;
    name : string;
    image_background : string;
}



const useGenres = () =>  ({data : genres,isLoading : false , error : false});  //useData<Genre>('/genres');

export default useGenres;
