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
        expect(checkout('G')).toBe(20);
        expect(checkout('H')).toBe(10);
        expect(checkout('I')).toBe(35);
        expect(checkout('J')).toBe(60);
        expect(checkout('K')).toBe(80);
        expect(checkout('L')).toBe(90);
        expect(checkout('M')).toBe(15);
        expect(checkout('N')).toBe(40);
        expect(checkout('O')).toBe(10);
        expect(checkout('P')).toBe(50);
        expect(checkout('Q')).toBe(30);
        expect(checkout('R')).toBe(50);
        expect(checkout('S')).toBe(30);
        expect(checkout('T')).toBe(20);
        expect(checkout('U')).toBe(40);
        expect(checkout('V')).toBe(50);
        expect(checkout('W')).toBe(20);
        expect(checkout('X')).toBe(90);
        expect(checkout('Y')).toBe(10);
        expect(checkout('Z')).toBe(50);
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
        expect(checkout('AAAAABBBEEFFFHHHHHKKNNNMOPQQRRUUUUVVVWXYZ')).toBe(1300);
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

    it('handle special offers for H', () => {
        expect(checkout('HHHHH')).toBe(45);
        expect(checkout('HHHHHH')).toBe(55);
        expect(checkout('HHHHHHHHHH')).toBe(80);
        expect(checkout('HHHHHHHHHHH')).toBe(90);
    });

    it('handle special offers for K', () => {
        expect(checkout('KK')).toBe(150);
        expect(checkout('KKK')).toBe(230);
    });

    it('handle special offers for P', () => {
        expect(checkout('PPPPP')).toBe(200);
        expect(checkout('PPPPPP')).toBe(250);
    });

    it('handle special offers for Q and R', () => {
        expect(checkout('QQQ')).toBe(80);
        expect(checkout('QQQQ')).toBe(110);
        expect(checkout('RRRQ')).toBe(150);
        expect(checkout('RRRQQ')).toBe(180);
    });

    it('handle special offers for U', () => {
        expect(checkout('UUU')).toBe(120);
        expect(checkout('UUUU')).toBe(120);
        expect(checkout('UUUUU')).toBe(160);
        expect(checkout('UUUUUUUU')).toBe(240);
    });

    it('handle special offers for V', () => {
        expect(checkout('V')).toBe(50);
        expect(checkout('VV')).toBe(90);
        expect(checkout('VVV')).toBe(130);
        expect(checkout('VVVV')).toBe(180);
        expect(checkout('VVVVV')).toBe(220);
        expect(checkout('VVVVVV')).toBe(260);
    });
});


