import { sum } from "../Components/sum";

test("sum function gives sum of 2 no passed into it",()=>{
    const result = sum(1,2);
    expect(result).toBe(3);
})

test("sum function gives sum of 2 no passed into it",()=>{
    const result = sum('a','b');
    expect(result).toBe('ab');
})