import caesarCipher from "./caesarCipher";

test('Wrapping from z to a', () => {
    expect(caesarCipher('zyxwvutsrqponmlkjihgfedcba', 5)).toBe('edcbazyxwvutsrqponmlkjihgf');
  });

  test('Keeping same case', () => {
    expect(caesarCipher('Keep same CASE', 7)).toBe('Rllw zhtl JHZL');
  });
  
  test('Test punctuation', () => {
    expect(caesarCipher('Hey, how are you?', 3)).toBe('Khb, krz duh brx?');
  });