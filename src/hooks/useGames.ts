import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../services/gameService";
import { Game } from "../types/Game";

export const useGames = () => {
    return useQuery<Game[]>({
        queryKey: ["games"],
        queryFn: fetchGames,
    });
};