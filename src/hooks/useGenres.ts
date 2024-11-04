import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genre";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    staleTime: ms("24h"),
    queryFn: apiClient.getAll,
    initialData: genres,
  });
};

export default useGenres;
