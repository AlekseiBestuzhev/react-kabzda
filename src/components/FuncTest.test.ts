import {multiply, sum} from './FuncTest';
let a: number;
let b: number;
beforeEach(() =>{
    a = 2;
    b = 3
})

test.skip('sum should be correct', () => {
    const result = sum(a, b);
    expect(result).toBe(5);
})

test.skip('multiply should be correct', () => {
    const result = multiply(a, b);
    expect(result).toBe(6);
})