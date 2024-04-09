'use strict';

import { addUp } from './solution1.js';

describe('addUp function', () => {
    test('sum of numbers from 1 to 4 should be 10', () => {
      expect(addUp(4)).toEqual(10);
    });
  
    test('sum of numbers from 1 to 0 should be 0', () => {
      expect(addUp(0)).toEqual(0);
    });
  
    test('sum of numbers from 1 to 10 should be 55', () => {
      expect(addUp(10)).toEqual(55);
    });
  
    
  })
