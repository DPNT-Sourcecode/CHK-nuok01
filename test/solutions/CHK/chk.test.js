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
        expect(checkout('F')).toBe(10);
    });

    it('should calculate total for multiple items', () => {
        expect(checkout('AB')).toBe(80);
        expect(checkout('AA')).toBe(100);
        expect(checkout('CCB')).toBe(70);
        expect(checkout('EEA')).toBe(130);
        expect(checkout('DDC')).toBe(50);
        expect(checkout('FAB')).toBe(90);
    });
});

describe('should apply special offers', () => {
    it('should apply single special offer', () => {
        expect(checkout('AAA')).toBe(130);
        expect(checkout('BB')).toBe(45);
        expect(checkout('AAAAA')).toBe(200);
        expect(checkout('EEB')).toBe(80);
        expect(checkout('FFF')).toBe(20);
    });

    it('should handle multiple special offers', () => {
        expect(checkout('AAABB')).toBe(130 + 45);
        expect(checkout('ABABA')).toBe(130 + 45);
        expect(checkout('AAAEEB')).toBe(130 + 80);
        expect(checkout('BBEEB')).toBe(125);
        expect(checkout('FFFAAA')).toBe(150);
        expect(checkout('FFFEEB')).toBe(100);
        expect(checkout('AAABBEEFFF')).toBe(260);
        expect(checkout('EABAFEF')).toBe(200);
    });

    it('should handle multiple instances of special offers', () => {
        expect(checkout('AAAAAA')).toBe(250);
        expect(checkout('AAAAAAAA')).toBe(330);
        expect(checkout('AAAAAAAAAA')).toBe(400);
        expect(checkout('BBBB')).toBe(90);
        expect(checkout('EEEEBB')).toBe(160);
        expect(checkout('FFFFFF')).toBe(40);
    });

    it('handle special offers for A', () => {
        expect(checkout('AAA')).toBe(130);
        expect(checkout('AAAAA')).toBe(200);
        expect(checkout('AAAA')).toBe(180);
        expect(checkout('AAAAAA')).toBe(250);
        expect(checkout('AAAAAAA')).toBe(300);
        expect(checkout('AAAAAAAA')).toBe(330);
    });

    it('handle special offers for B', () => {
        expect(checkout('BB')).toBe(45);
        expect(checkout('BBB')).toBe(75);
        expect(checkout('BBBB')).toBe(90);
        expect(checkout('BBBBB')).toBe(120);
    });

    it('handle special offers for E', () => {
        expect(checkout('EE')).toBe(80);
        expect(checkout('EEB')).toBe(80);
        expect(checkout('EEBB')).toBe(110);
        expect(checkout('EEEEB')).toBe(160);
        expect(checkout('EEBBB')).toBe(125);
    });

    it('handle special offers for F', () => {
        expect(checkout('F')).toBe(10);
        expect(checkout('FF')).toBe(20);
        expect(checkout('FFF')).toBe(20);
        expect(checkout('FFFF')).toBe(30);
        expect(checkout('FFFFF')).toBe(40);
        expect(checkout('FFFFFF')).toBe(40);
        expect(checkout('FFFFFFF')).toBe(50);
        expect(checkout('FFFFFFFF')).toBe(60);
        expect(checkout('FFFFFFFFF')).toBe(60);

    });
});
