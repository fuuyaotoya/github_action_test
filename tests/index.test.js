const { Calculator, StringUtils } = require('../src/index');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(calc.add(-2, -3)).toBe(-5);
    });

    test('should add zero correctly', () => {
      expect(calc.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(calc.subtract(5, 3)).toBe(2);
    });

    test('should handle negative results', () => {
      expect(calc.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(calc.multiply(3, 4)).toBe(12);
    });

    test('should handle multiplication by zero', () => {
      expect(calc.multiply(5, 0)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(calc.multiply(-3, 4)).toBe(-12);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    test('should handle decimal results', () => {
      expect(calc.divide(7, 2)).toBe(3.5);
    });

    test('should throw error for division by zero', () => {
      expect(() => calc.divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('power', () => {
    test('should calculate power correctly', () => {
      expect(calc.power(2, 3)).toBe(8);
    });

    test('should handle power of zero', () => {
      expect(calc.power(5, 0)).toBe(1);
    });

    test('should handle negative exponents', () => {
      expect(calc.power(2, -2)).toBe(0.25);
    });
  });
});

describe('StringUtils', () => {
  let strUtils;

  beforeEach(() => {
    strUtils = new StringUtils();
  });

  describe('capitalize', () => {
    test('should capitalize first letter', () => {
      expect(strUtils.capitalize('hello')).toBe('Hello');
    });

    test('should handle already capitalized strings', () => {
      expect(strUtils.capitalize('Hello')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(strUtils.capitalize('')).toBe('');
    });

    test('should throw error for non-string input', () => {
      expect(() => strUtils.capitalize(123)).toThrow(TypeError);
    });
  });

  describe('reverse', () => {
    test('should reverse a string', () => {
      expect(strUtils.reverse('hello')).toBe('olleh');
    });

    test('should handle empty string', () => {
      expect(strUtils.reverse('')).toBe('');
    });

    test('should handle palindromes', () => {
      expect(strUtils.reverse('racecar')).toBe('racecar');
    });

    test('should throw error for non-string input', () => {
      expect(() => strUtils.reverse(123)).toThrow(TypeError);
    });
  });

  describe('isPalindrome', () => {
    test('should identify palindromes', () => {
      expect(strUtils.isPalindrome('racecar')).toBe(true);
      expect(strUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    test('should identify non-palindromes', () => {
      expect(strUtils.isPalindrome('hello')).toBe(false);
    });

    test('should handle empty string', () => {
      expect(strUtils.isPalindrome('')).toBe(true);
    });

    test('should be case-insensitive', () => {
      expect(strUtils.isPalindrome('Racecar')).toBe(true);
    });

    test('should throw error for non-string input', () => {
      expect(() => strUtils.isPalindrome(123)).toThrow(TypeError);
    });
  });
});