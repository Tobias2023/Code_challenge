# Exercise #1

## Find the magic number

The goal is to find the smallest number (let's call it **M**) such that:

- If M obeys property X, then the digit X is part of the number.
- If M does not obey property X, then the digit X is NOT part of the number.

For example, if 2457 were a magic number, it would obey properties 2, 4, 5, 7 and not 0, 1, 3, 6, 8, 9. However we find that not to be the case, so it is not the number we are looking for.

### Properties

- **0**. One of the digits of M is the sum of the others.
- **1**. Digits in decreasing sequence.
- **2**. M has at least 2 odd digits.
- **3**. All digits are different.
- **4**. There is no subset in the digits with a sum of 4.
- **5**. The number is not a palindrome.
- **6**. The number does not contain 3 odd digits in a row.
- **7**. M is a prime number.
- **8**. M has at least 2 even digits in a row.
- **9**. The product of all odd digits is a square number.

### My Approach

[Completed Task]

- Create property functions to test M against properties
- Create test using (Jest) to ensure correct function outputs 
    - Run **npm run test** or **yarn test**



#### Where I got stuck:

 **The part where I got stuck was the final output, how to glue everything together.**

 My thought process was to create all the property functions, create an additional hasDigit function to check for the magic number and main magicNumber function with a loop to run all the function and the hasDigit function, if any of the conditions met returned falsy then it would not be the number.


hasDigit function: 
```
// Pseudocode

 const hasDigit = (digit, number) => {
   return number.toString().indexOf(digit.toString()) !== -1;
 };

```



#### ----------------------------------------- and--------------------------------------

Create the main magicNumber function that checks all conditions

```
// Pseudocode

 const magicNumber = () => {
  let m = 1;
  while (true) {
    if (((hasDigit(0, m) && isSumOthers(m) )||(!hasDigit(0) && !isDecreasing(m)) && (1) && (2)...
    m++;
  }
}


``` 

#### Conclusion

**I think this was a great challenge and although I could not come to a complete solution, I strongly believe I was on the right track. I am so eager and excited to accept feedback on ways I could've approached this better, and ways to improve.**

