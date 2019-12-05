const {
    binarySearch
} = require('../arrayBinarySearch/array-binary-search.js');

describe('binary search function', () => {

    it('returns the correct array index or -1 if not found', () => {
        expect(binarySearch([2, 4, 6, 8], 5)).toEqual(-1);
        expect(binarySearch([9, 8, 7, 6, 5, 4, 3, 2, 1], 5)).toEqual(4);
    });
});