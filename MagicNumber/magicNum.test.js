const {
  isSumOthers,
  isDecreasing,
  isTwoOrMoreOdd,
  isUnique,
  subsetSumFour,
  isPalindrome,
  isThreeOdds,
  isPrime,
  isTwoEvens,
  isSquareOfodds,
} = require("./magicNum");

// two test each... true / false

test("(false) check if 1 of the digits is the sum of the others", () => {
  expect(isSumOthers(1234)).toBe(false);
});

test("(true) check if 1 of the digits is the sum of the others", () => {
  expect(isSumOthers(2622)).toBe(true);
});

//

test("(false) check if numbers decreasing", () => {
  expect(isDecreasing(1234)).toBe(false);
});

test("(true) check if numbers decreasing", () => {
  expect(isDecreasing(3210)).toBe(true);
});

//

test("(false) check if 2 or more numbers are odd", () => {
  expect(isTwoOrMoreOdd(2222)).toBe(false);
});

test("(true) check if 2 or more numbers are odd", () => {
  expect(isTwoOrMoreOdd(1111)).toBe(true);
});

//

test("(false) check if all numbers are unique", () => {
  expect(isUnique(12344456)).toBe(false);
});

test("(true) check if all numbers are unique", () => {
  expect(isUnique(896325)).toBe(true);
});

//

test("(false) check that there is no subset in the digits with a sum of 4", () => {
  expect(subsetSumFour(963)).toBe(false);
});

test("(true) check that there is no subset in the digits with a sum of 4", () => {
  expect(subsetSumFour(321)).toBe(true);
});

//

test("(false) check if input is a Palindrome", () => {
  expect(isPalindrome(1116)).toBe(false);
});

test("(true) check if input is a Palindrome", () => {
  expect(isPalindrome(1111)).toBe(true);
});

//

test("(false) check if there are 3 odd numbers in a row", () => {
  expect(isThreeOdds(3212)).toBe(false);
});

test("(true) check if there are 3 odd numbers in a row", () => {
  expect(isThreeOdds(321112)).toBe(true);
});

//

test("(false) check if m is a prime number", () => {
  expect(isPrime(8)).toBe(false);
});

test("(true) check if m is a prime number", () => {
  expect(isPrime(97)).toBe(true);
});

//

test("(false) check if m contains 2 + evens", () => {
  expect(isTwoEvens(4)).toBe(false);
});

test("(true) check if m contains 2 + evens", () => {
  expect(isTwoEvens(32104)).toBe(true);
});

//

test("(false) check if product of all odd digits is a square number", () => {
  expect(isSquareOfodds(963)).toBe(false);
});

test("(true) check if product of all odd digits is a square number", () => {
  expect(isSquareOfodds(1299)).toBe(true);
});