const { multiBracketValidation } = require('./multi-bracket-validation');

describe('multi bracket validation', () => {
    it('returns true if the brackets match', () => {
        expect(multiBracketValidation('()[]{}')).toBeTruthy;
    });

    it('returns false if the brackets do not match', () => {
        expect(multiBracketValidation('(}')).toBeTruthy;
    });

    it('returns false if the brackets do not match', () => {
        expect(multiBracketValidation('(}')).toEqual(false);
    });

    it('returns false if the brackets do not match', () => {
        expect(multiBracketValidation('{}}')).toEqual(false);
    });
});