// 0. One of the digits of M is the sum of the others. ***

const isSumOthers = (m) => {
  let digits = ("" + m).split("");
  let sum = digits.reduce(function (total, num) {
    return parseFloat(total) + parseFloat(num);
  });

  for (let i = 0; i < digits.length; i++) {
    if (sum - digits[i] == digits[i]) {
      return true;
    }
  }

  return false;
};

// 1. Digits in decreasing sequence. ***

function isDecreasing(m) {
  let digits = ("" + m).split("");

  return digits.every(function (x, i) {
    return i === 0 || x <= digits[i - 1];
  });
}

// 2. M has at least 2 odd digits. ***

function isTwoOrMoreOdd(m) {
  let digits = ("" + m).split("");
  let count = 0;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] % 2 !== 0) {
      count++;
    }
  }
  return count < 2 ? false : true;
}

// 3. All digits are different. ***

function isUnique(m) {
  let digits = ("" + m).split("");
  let res = true;

  // Check using a Set
  const sett = new Set(digits);
  if (digits.length !== sett.size) {
    res = false;
  }
  return res;
}

// 4. There is no subset in the digits with a sum of 4. ***

const subsetSumFour = (m) => {
  let digits = ("" + m).split("");

  // get all possible subsets
  const allSubsets = digits.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );

  // loop through nested arrays finding subsets
  for (let i = 0; i < allSubsets.length; i++) {
    if (allSubsets[i].length != 0) {
      let sum = allSubsets[i].reduce(function (total, num) {
        return parseFloat(total) + parseFloat(num);
      });

      if (sum == 4) {
        return true;
      }
    }
  }

  return false;
};

// 5. The number is not a palindrome. ***
const isPalindrome = (m) => {
  let factor = 1;
  while (m / factor >= 10) {
    factor *= 10;
  }
  while (m) {
    let first = Math.floor(m / factor);
    let last = m % 10;
    // If first and last digit not same return false
    if (first != last) {
      return false;
    }
    // Removing the first and last digit from number
    m = Math.floor((m % factor) / 10);
    // Reducing factor by a factor of 2 as 2 digits are dropped
    factor = factor / 100;
  }
  return true;
};

// 6. The number does not contain 3 odd digits in a row. ***

const isThreeOdds = (m) => {
  let digits = ("" + m).split("");
  for (let i = 0; i < digits.length - 2; i++) {
    if (
      // Checking if odd in each index
      digits[i] % 2 !== 0 &&
      digits[i + 1] % 2 !== 0 &&
      digits[i + 2] % 2 !== 0
    ) {
      return true;
    }
  }
  return false;
};

// 7. M is a prime number. ***

// - Prime numbers are positive, non-zero numbers that have exactly two factors
const isPrime = (m) => {
  for (let i = 2; i < m; i++) if (m % i === 0) return false;
  return m > 1;
};

// 8. M has at least 2 even digits in a row. ***

const isTwoEvens = (m) => {
  let digits = ("" + m).split("");
  for (let i = 0; i < digits.length; i++) {
    if (
      // Checking if even in each index
      digits[i] % 2 == 0 &&
      digits[i + 1] % 2 == 0
    ) {
      return true;
    }
  }

  return false;
};

// 9. The product of all odd digits is a square number. ***

function isSquareOfodds(m) {
  let digits = ("" + m).split("");
  let odds = digits.filter((n) => n % 2);
  const product = odds.reduce((a, b) => a * b, 1);
  const isSquare = (num) => {
    return num > 0 && Math.sqrt(num) % 1 === 0;
  };

  return isSquare(product) ? true : false;
}

// Get the smallest from the number

// check if M has digit

// const hasDigit = (digit, number) => {
//   return number.toString().indexOf(digit.toString()) !== -1;
// };

// const magicNumber = () => {
//   let m = 1;
//   while (true) {
//     if (((hasDigit(0, m) && isSumOthers(m) )||(!hasDigit(0) && !isDecreasing(m)) && (1) && (2)...
//     m++;
//   }
// Do we return M here?
// }

// OR using a for loop

// const magicNumber(){
//     m = 1

//     for (let i = m; i <= 10000; i++ ){
//         if()
//     }
// }

module.exports = {
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
};
