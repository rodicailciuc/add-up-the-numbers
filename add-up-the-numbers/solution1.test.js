'use strict';

import { addUp } from './solution1.js';

describe('addUp function', () => {
    it('sum of numbers from 1 to 4 should be 10', () => {
      expect(addUp(4)).toEqual(10);
    });
  
    it('sum of numbers from 1 to 0 should be 0', () => {
      expect(addUp(0)).toEqual(0);
    });
  
    it('sum of numbers from 1 to 10 should be 55', () => {
      expect(addUp(10)).toEqual(55);
    });
    it('should throw an error when given a negative number', () => {
      expect(() => addUp(-1)).toThrowError('Expect any positive number between 1 and 1000');
    });

    it('should throw an error when given a number greater than 1000', () => {
      expect(() => addUp(1001)).toThrowError('Expect any positive number between 1 and 1000');
    });
    
  })
