const CheckoutSolution = require('../../../lib/solutions/CHK/checkout_solution');
const checkoutSolution = new CheckoutSolution();
const checkout = checkoutSolution.checkout;

describe('should handle basic cases', () => {
    it('should return 0 for empty string', () => {
        expect(checkout('')).toBe(0);
    });

    it('should return -1 for invalid skus', () => {
        expect(checkout('ABCDX')).toBe(-1);
        expect(checkout('.xyz')).toBe(-1);
        expect(checkout(23)).toBe(-1);
    });

    it("should handle lower case strings", () => {
        expect(checkout('abc')).toBe(-1);
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
});

describe('should apply special offers', () => {
    it('should apply single special offer', () => {
        expect(checkout('AAA')).toBe(130);
        expect(checkout('BB')).toBe(45);
    });

    it('should handle multiple special offers', () => {
        expect(checkout('AAABB')).toBe(130 + 45);
        expect(checkout('ABABA')).toBe(130 + 45);
    });

    it('should handle multiple instances of special offers', () => {
        expect(checkout('AAAAA')).toBe(230);
        expect(checkout('AAAAAA')).toBe(260);
        expect(checkout('BBB')).toBe(75);
        expect(checkout('BBBB')).toBe(90);
        expect(checkout('AAAAAABBBB')).toBe(350);
    });
});



