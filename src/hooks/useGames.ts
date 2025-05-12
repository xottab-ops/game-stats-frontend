import { useQuery } from "@tanstack/react-query";
import { fetchGames, fetchAggregateGameStatsDevelopers, fetchAggregateGameStatsPublishers } from "../services/gameService";
import { AggregatePublisher, AggregateDeveloper, Game} from "../types/Game";

export const useGames = () => {
    return useQuery<Game[]>({
        queryKey: ["games"],
        queryFn: fetchGames,
    });
};

export const useAggregationDevelopers = () => {
    return useQuery<AggregateDeveloper[]>({
        queryKey: ["stats", "developers"],
        queryFn: fetchAggregateGameStatsDevelopers,
    });
}

export const useAggregationPublishers = () => {
    return useQuery<AggregatePublisher[]>({
        queryKey: ["stats"],
        queryFn: fetchAggregateGameStatsPublishers,
    });
}