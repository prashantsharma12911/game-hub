import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import { Genre } from "../entities/Genre";




const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey : ['genres'],
    queryFn : apiClient.getAll,
    staleTime : 24 * 60 * 60 * 1000, // for this time genres will be saved
    initialData : { count : genres.length , results : genres}
  });

export default useGenres;
