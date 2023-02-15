import mongoose from "mongoose"
import { Pagination } from "./Pagination";

// type FilterType = 'equal' | 'like' | 'gt' | 'lt'

// export type Filter = {
//     key: string,
//     type: FilterType,
//     value: string | number
// }



const FilterFunctionMapping: { [k in FilterType]: (key: string, val: string | number) => any } = {
    equal: (k, v) => { return { [k]: v } },
    gt: (k, v) => { return { [k]: { $gt: v } } },
    lt: (k, v) => { return { [k]: { $lt: v } } },
    like: (k, v) => { return { [k]: { $regex: v } } },
}


export function createAggregation(prj_id: number, collection_id: string, pagination: Pagination, filters: Filter[]) {

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