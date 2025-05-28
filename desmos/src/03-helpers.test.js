const {subtract, isEven} = require('./03-math-helpers.js');

//------ Resta----

test("Rest of 10 - 3 should be 7", () => {
  const result = subtract(10, 3);
  expect(result).toBe(7);
});

test("Rest of 3 - 10 should be -7", () => {
  const result = subtract(-10, -3);
  expect(result).toBe(-7);

});

// Ejercicio 2

test("Is 4 even?", () => {
  const result = isEven(10);
  expect(result).toBe(true);
});

test("Is 3 even?", () => {
  const result = isEven(3);
  expect(result).toBe(false);
});

test ("Is 0 even?", () => {
  const result = isEven(0);
  expect(result).toBe(true);
});
