import {sum} from './FuncTest';
let a: number;
let b: number;
beforeEach(() =>{
    a = 2;
    b = 3
})

test('sum should be correct', () => {
    const result = sum(a, b);
    expect(result).toBe(5);
})