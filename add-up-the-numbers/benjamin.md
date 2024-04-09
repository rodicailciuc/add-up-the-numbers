'use strict';

# [benjamin-code]

```js
const addUp = n => Array
 .from({ length: n + 1 }, (v, i) => i)
 .reduce((a, b) => a + b);
```

## Strategy

This code utilizes the functional programming approach, leveraging array methods like Array.from() and reduce() to compute the sum of consecutive numbers. It generates an array of numbers and then reduces it to obtain the sum. While this approach is concise, it involves creating an intermediate array, which may have a slight performance overhead for large values of n compared to the direct mathematical formula.

## Implementation

- The Array.from() method is used to generate an array of numbers from 0 to n. The length parameter of the array is set to n + 1, and the mapping function provided generates numbers from 0 to n.

- The reduce() method is applied to the generated array. It iterates over each element of the array and accumulates the sum. The accumulator a represents the running total, while b represents the current element being processed. The initial value of the accumulator is implicitly set to 0.

- The result of the reduce() operation, which is the sum of all numbers from 0 to n, is returned as the output of the function.
