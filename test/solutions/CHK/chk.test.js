const { checkout, prices, specials } = require('../../../lib/solutions/CHK/checkout_solution');

describe('should handle basic cases', () => {
    it('should return 0 for empty string', () => {
        console.log(checkout(''));
        expect(checkout('')).toBe(0);
    });

    it('should return -1 for invalid skus', () => {
        expect(checkout('ABCDX')).toBe(-1);
    });

    it('should calculate total for single item', () => {
        expect(checkout('A')).toBe(prices.A);
        expect(checkout('B')).toBe(prices.B);
        expect(checkout('C')).toBe(prices.C);
        expect(checkout('D')).toBe(prices.D);
    });

    it('should calculate total for multiple items', () => {
        expect(checkout('AB')).toBe(prices.A + prices.B);
        expect(checkout('AA')).toBe(prices.A * 2);
        expect(checkout('CCB')).toBe(prices.C + prices.C + prices.B);
    });

    it('should apply special offers', () => {
        expect(checkout('ABABA')).toBe(130 + 45);
    });

    it('should handle multiple special offers', () => {
        expect(checkout('AAABB')).toBe(130 + 45);
    });
});
