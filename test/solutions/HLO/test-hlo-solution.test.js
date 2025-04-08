const HelloSolution = require('../../../lib/solutions/HLO/hello_solution');

describe('HelloSolution output Hello World!', () => {
    it('should return a string', () => {
        const helloSolution = new HelloSolution();
        expect(helloSolution.hello()).toBe('Hello World!');
    });
});
