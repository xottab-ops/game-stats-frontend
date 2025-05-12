import {AggregateDeveloper, AggregatePublisher, Game} from "../types/Game";
import { apiFetch } from "./apiClient";

export const fetchGames = async (): Promise<Game[]> => {
    const response = await apiFetch<{ games: { games: Game }[] }>("/api/v1/games");
    return response.games.map((wrapper) => wrapper.games);
};

export const fetchAggregateGameStatsDevelopers = async (): Promise<AggregateDeveloper[]> => {
    const response = await apiFetch<{ stats: AggregateDeveloper [] }>("/api/v1/stats/developers");
    return response.stats
};

export const fetchAggregateGameStatsPublishers = async (): Promise<AggregatePublisher[]> => {
    const response = await apiFetch<{ stats: AggregatePublisher [] }>("/api/v1/stats/publishers");
    return response.stats
};