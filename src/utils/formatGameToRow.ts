import { Game } from "../types/Game";
import { GameRow } from "../types/GameRow";

export const formatGameToRow = (game: Game): GameRow => ({
    id: game.id,
    name: game.name,
    publisher: game.publisher.name,
    developer: game.developer.name,
    categories: game.categories.map((c) => c.name).join(', '),
    platforms: game.platforms.map((p) => p.name).join(', '),
    price: game.price,
    positiveRating: game.positive_rating,
    negativeRating: game.negative_rating,
});