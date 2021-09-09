/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    return fields.reduce((a, x) => {
        if(obj.hasOwnProperty(x)) a[x] = obj[x];
        return a;
    }, {});
};
