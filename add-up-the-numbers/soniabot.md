# [soniabot]

```js
const addUp = num => num * (num + 1) / 2;
```

## Strategy

The strategy that Soniabot employed in this code is based on a mathematical formula for calculating the sum of consecutive numbers. Instead of using a loop to iterate through each number and accumulate the sum, it utilizes a direct formula to compute the sum more efficiently. This strategy leverages the arithmetic series formula for the sum of an arithmetic sequence.

## Implementation

- The code directly applies the arithmetic series formula for the sum of the first `n` natural numbers: 
sum = n(n+1)/2
- Given the input number num, the code computes the sum using the provided formula: num * (num + 1) / 2.

Return the Sum: The calculated sum is immediately returned as the result of the function.
