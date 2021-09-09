/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    numbers = numbers.sort(function(a, b){ 
        return b - a;
      }).slice(0 , 2);
    return numbers.reduce(function(acc, val) { return acc + val; }, 0);
}
