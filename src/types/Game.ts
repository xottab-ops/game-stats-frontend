export interface GameCategory {
    id: number;
    name: string;
}

export interface Platform {
    id: number;
    name: string;
}

export interface Company {
    id: number;
    name: string;
}

export interface Game {
    id: number;
    name: string;
    developer_id: number;
    developer: Company;
    publisher_id: number;
    publisher: Company;
    categories: GameCategory[];
    platforms: Platform[];
    positive_rating: number;
    negative_rating: number;
    price: number;
    release_date: string;
}