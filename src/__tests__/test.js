import life from '../funcHealth';

test('life healthy test', () => {
  const pers = {
    name: 'Маг',
    health: 90,
  };
  const result = life(pers);
  expect(result).toBe('healthy');
});

test('life wounded test', () => {
  const pers = {
    name: 'Маг',
    health: 42,
  };
  const result = life(pers);
  expect(result).toBe('wounded');
});

test('life critical test', () => {
  const pers = {
    name: 'Маг',
    health: 12,
  };
  const result = life(pers);
  expect(result).toBe('critical');
});
