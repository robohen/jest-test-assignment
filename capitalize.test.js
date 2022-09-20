import capitalize from './capitalize';

test('Capitalize first letter', () => {
  expect(capitalize('string')).toBe('String');
});