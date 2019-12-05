const {
    arrayShift
} = require('../arrayShift/array-shift.js');

describe('array shift function', () => {

    it('returns an array with a new item inserted into the middle', () => {
        expect(arrayShift([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
        expect(arrayShift([8, 7, 6, 5, 4, 3, 2, 1], 4.5)).toEqual([8, 7, 6, 5, 4.5, 4, 3, 2, 1]);
    });
});