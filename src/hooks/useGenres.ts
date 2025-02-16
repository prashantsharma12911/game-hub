import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<Response<Genre>>("/genres")
        .then((res) => res.data),
    staleTime : 24 * 60 * 60 * 1000, // for this time genres will be saved
    initialData : { count : genres.length , results : genres}
  });

export default useGenres;
