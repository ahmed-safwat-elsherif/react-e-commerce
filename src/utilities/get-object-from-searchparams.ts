export type ReturnedObjectType = {
    [key in string]: any
};

export function getObjFromSearchParams(object: URLSearchParams): ReturnedObjectType {
    let obj: ReturnedObjectType = {};
    for (const key of object.keys()) {
        obj[key] = object.get(key);
    }
    return { ...obj };
}