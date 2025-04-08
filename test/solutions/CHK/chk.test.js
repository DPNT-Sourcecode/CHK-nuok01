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
        expect(checkout('E')).toBe(40);
    });

    it('should calculate total for multiple items', () => {
        expect(checkout('AB')).toBe(80);
        expect(checkout('AA')).toBe(100);
        expect(checkout('CCB')).toBe(70);
        expect(checkout('EEA')).toBe(130);
        expect(checkout('DDC')).toBe(50);
    });
});

describe('should apply special offers', () => {
    it('should apply single special offer', () => {
        expect(checkout('AAA')).toBe(130);
        expect(checkout('BB')).toBe(45);
        expect(checkout('AAAAA')).toBe(200);
        expect(checkout('EEB')).toBe(80);
    });

    it('should handle multiple special offers', () => {
        expect(checkout('AAABB')).toBe(130 + 45);
        expect(checkout('ABABA')).toBe(130 + 45);
        expect(checkout('AAAEEB')).toBe(130 + 80);
        expect(checkout('BBEEB')).toBe(125);
    });

    it('should handle multiple instances of special offers', () => {
        expect(checkout('AAAAAAAA')).toBe(330);
        expect(checkout('AAAAAAAAAA')).toBe(400);
        expect(checkout('BBBB')).toBe(90);
        expect(checkout('EEEEBB')).toBe(80);
    });
});
