import analyzeArr from "./analyzeArray";

test('Analyze array', () => {
    const object = analyzeArr([1,2,3,4,5,6,7]);
    expect(object).toEqual({
        average:4,
        min: 1,
        max: 7,
        length: 7
    });
});