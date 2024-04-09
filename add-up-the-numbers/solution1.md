# [My Numbers](https://edabit.com/challenge/4gzDuDkompAqujpRi)

```js
const addUp = (num) => {
	let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
```

## Strategy

The strategy used in this code is to calculate the sum of numbers from 1 up to a given number (num). This is achieved using a simple loop that iterates from 1 to num, adding each number to a running total (sum).

## Implementation

- The variable sum is initialized to 0. This variable will store the cumulative sum of numbers.

- A for loop is used to iterate through numbers from 1 up to num. The loop starts with i set to 1 and continues until i is less than or equal to num.

- Within each iteration of the loop, the value of i is added to the sum. This accumulates the sum of all numbers from 1 up to num.

- After the loop completes, the final value of sum is returned as the result