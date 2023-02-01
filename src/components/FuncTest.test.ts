import {sum} from './FuncTest';
let a = 2;
let b = 3;
test('sum should be correct', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
})