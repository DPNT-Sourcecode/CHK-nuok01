const CheckoutSolution = require('../../../lib/solutions/CHK/checkout_solution');

describe('should handle basic cases', () => {
    it('should return 0 for empty string', () => {
        expect(CheckoutSolution.checkout('')).toBe(0);
    });

    it('should return -1 for invalid skus', () => {
        expect(checkout('ABCDX')).toBe(-1);
    });

    it('should calculate total for single item', () => {
        expect(checkout('A')).toBe(50);
        expect(checkout('B')).toBe(30);
        expect(checkout('C')).toBe(20);
        expect(checkout('D')).toBe(15);
    });

    it('should calculate total for multiple items', () => {
        expect(checkout('AB')).toBe(80);
        expect(checkout('AA')).toBe(100);
        expect(checkout('CCB')).toBe(70);
    });

    it('should apply special offers', () => {
        expect(checkout('ABABA')).toBe(130 + 45);
    });

    it('should handle multiple special offers', () => {
        expect(checkout('AAABB')).toBe(130 + 45);
    });
});