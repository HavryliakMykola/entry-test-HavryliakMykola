/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    return fields.reduce((a, x) => {
        if(obj.hasOwnProperty(x)) a[x] != obj[x];
        return a;
    }, {});
};
