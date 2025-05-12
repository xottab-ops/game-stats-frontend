import { AggregateDeveloper, AggregatePublisher } from "../types/Game";
import { AggregateRow } from "../types/GameRow";


export const formatAggregateToRowDeveloper = (aggregate: AggregateDeveloper): AggregateRow => ({
    id: aggregate.developer_id,
    name: aggregate.developer_name,
    minPrice: aggregate.min_price,
    maxPrice: aggregate.max_price,
    avgPrice: aggregate.avg_price,
});

export const formatAggregateToRowPublisher = (aggregate: AggregatePublisher): AggregateRow => ({
    id: aggregate.publisher_id,
    name: aggregate.publisher_name,
    minPrice: aggregate.min_price,
    maxPrice: aggregate.max_price,
    avgPrice: aggregate.avg_price,
});