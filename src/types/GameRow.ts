export interface GameRow {
    id: number;
    name: string;
    publisher: string;
    developer: string;
    categories: string;
    platforms: string;
    price: number;
    positiveRating: number;
    negativeRating: number;
}

export interface AggregateRow {
    id: number;
    name: string;
    minPrice: number;
    maxPrice: number;
    avgPrice: number;
}