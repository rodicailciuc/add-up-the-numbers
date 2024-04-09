'use strict';

/**
 * Add up the Numbers from a Single Number
 *
 * @param {number} num -  representing the number up to which you want to add.
 * @returns {number} - returns the total sum.
 */

export const addUp = (num) => {
	let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
