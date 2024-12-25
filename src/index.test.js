import { capitalize } from ".";
import { reverseString } from ".";
import { calculator } from ".";
import { analyseArray } from ".";
import { caesarCipher } from ".";

test("Should return the first letter capitalized", () => {
  expect(capitalize("test")).toBe("Test");
});

test("Should return the reverse of string", () => {
  expect(reverseString("test")).toBe("tset");
});

test("Should return a sum", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Should return a multiplication", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("Should return a substraction", () => {
  expect(calculator.substract(1, 2)).toBe(-1);
});

test("Should return a division", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("Should return an object of an analyzed array", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Should return ceaser cipher code", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
