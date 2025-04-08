const HelloSolution = require('../../../lib/solutions/HLO/hello_solution');

describe('HelloSolution outputs expected string', () => {
    it('should return a string', () => {
        const helloSolution = new HelloSolution();
        expect(helloSolution.hello('John')).toBe('Hello, John!');
    });
});
