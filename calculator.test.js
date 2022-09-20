import {add, subtract, divide, multiply} from './calculator';

test('Add', ()=>{
    expect(add(3,6)).toBe(9);
});

test('Subtract', ()=> {
expect(subtract(9,2)).toBe(7);
});

test('Divide', ()=>{
    expect(divide(48,6)).toBe(8);
});

test('Multiply', ()=>{
    expect(multiply(6,6)).toBe(36);
});