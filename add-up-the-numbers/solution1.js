'use strict';

/**
 * Add up the Numbers from a Single Number
 *
 * @param {number} num -  representing the number up to which you want to add.
 * @returns {number} - returns the total sum.
 * @throws {Error} Throws an error if the input number is negative or greater than 1000.
 */

export const addUp = (num) => {
    if (num < 0 || num > 1000) {
        throw new Error('Expect any positive number between 1 and 1000');
    };
	let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    };
    return sum;
};
