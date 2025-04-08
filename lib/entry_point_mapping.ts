import SumSolution from './solutions/SUM/sum_solution.ts';
import HelloSolution from './solutions/HLO/hello_solution.ts';
import FizzBuzzSolution from './solutions/FIZ/fizz_buzz_solution.ts';
import CheckoutSolution from './solutions/CHK/checkout_solution.ts';
import DemoRound1Solution from './solutions/DMO/demo_round1_solution.ts';
import DemoRound2Solution from './solutions/DMO/demo_round2_solution.ts';
import DemoRound3Solution from './solutions/DMO/demo_round3_solution.ts';
import DemoRound4n5Solution from './solutions/DMO/demo_round4n5_solution.ts';
import InventoryItem from './solutions/DMO/inventory_item.ts';

export default class EntryPointMapping {
    private sumSolution: SumSolution;
    private helloSolution: HelloSolution;
    private fizzBuzzSolution: FizzBuzzSolution;
    private checkoutSolution: CheckoutSolution;
    private demoRound1Solution: DemoRound1Solution;
    private demoRound2Solution: DemoRound2Solution;
    private demoRound3Solution: DemoRound3Solution;
    private demoRound4n5Solution: DemoRound4n5Solution;

    constructor() {
        this.sumSolution = new SumSolution();
        this.helloSolution = new HelloSolution();
        this.fizzBuzzSolution = new FizzBuzzSolution();
        this.checkoutSolution = new CheckoutSolution();
        this.demoRound1Solution = new DemoRound1Solution();
        this.demoRound2Solution = new DemoRound2Solution();
        this.demoRound3Solution = new DemoRound3Solution();
        this.demoRound4n5Solution = new DemoRound4n5Solution();
    }

    sum(x: number, y: number): number {
        return this.sumSolution.compute(x, y);
    }

    hello(name: string): string {
        return this.helloSolution.hello(name);
    }

    fizz_buzz(number: number): string {
        return this.fizzBuzzSolution.fizzBuzz(number);
    }

    checkout(skus: string): number {
        return this.checkoutSolution.checkout(skus);
    }

    increment(number: number): number {
        return this.demoRound1Solution.increment(number);
    }

    to_uppercase(text: string): string {
        return this.demoRound1Solution.to_uppercase(text);
    }

    letter_to_santa(): string {
        return this.demoRound1Solution.letter_to_santa();
    }

    count_lines(text: string): number {
        return this.demoRound1Solution.count_lines(text);
    }

    array_sum(numbers: number[]): number {
        return this.demoRound2Solution.array_sum(numbers);
    }

    int_range(start: number, end: number): number[] {
        return this.demoRound2Solution.int_range(start, end);
    }

    filter_pass(grades: number[]): number[] {
        return this.demoRound2Solution.filter_pass(grades);
    }

    inventory_add(inventoryItem: InventoryItem, number: number): void {
        return this.demoRound3Solution.inventory_add(inventoryItem, number);
    }

    inventory_size(): number {
        return this.demoRound3Solution.inventory_size();
    }

    inventory_get(index: number): InventoryItem {
        return this.demoRound3Solution.inventory_get(index);
    }

    waves(text: string): string {
        return this.demoRound4n5Solution.waves(text);
    }
} 