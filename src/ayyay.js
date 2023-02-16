import mongoose from "mongoose"
import { Pagination } from "./Pagination";

// type FilterType = 'equal' | 'like' | 'gt' | 'lt'

// export type Filter = {
//     key: string,
//     type: FilterType,
//     value: string | number
// }





export function createAggregation(prj_id, collection_id,  pagination, filters) {

    const collectionObject = new mongoose.Types.ObjectId(collection_id);

    const result = [
        { $match: { prj_id: parseInt(prj_id.toString()), collection_id: collectionObject } },
        { $skip: pagination.page * pagination.pageElems },
        { $limit: pagination.pageElems },
    ]

    for (const filter of filters) {
        const fn = FilterFunctionMapping[filter.type];
        const res = { $match: fn(filter.key, filter.value) }
        result.push(res);
    }

    return result;

}