import React from 'react'
import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { Response } from '../services/api-client';

export interface Platform{
    id : number;
    name: string;
    slug:string;
}

const usePlatforms = () => useQuery({
    queryKey : ['platforms'],
    queryFn : () => apiClient.get<Response<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime : 24 * 60 * 60 * 1000, // 24 hrs
});

export default usePlatforms;
