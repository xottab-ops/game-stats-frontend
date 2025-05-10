import { Game } from "../types/Game";
import { apiFetch } from "./apiClient";

export const fetchGames = async (): Promise<Game[]> => {
    const response = await apiFetch<{ games: Game[] }>("/api/v1/games");
    return response.games;
};