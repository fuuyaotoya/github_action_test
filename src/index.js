class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}

class StringUtils {
  capitalize(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Input must be a string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  reverse(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Input must be a string');
    }
    return str.split('').reverse().join('');
  }

  isPalindrome(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Input must be a string');
    }
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }
}

module.exports = {
  Calculator,
  StringUtils
};

if (require.main === module) {
  const calc = new Calculator();
  const strUtils = new StringUtils();

  console.log('Calculator Demo:');
  console.log('10 + 5 =', calc.add(10, 5));
  console.log('10 - 5 =', calc.subtract(10, 5));
  console.log('10 * 5 =', calc.multiply(10, 5));
  console.log('10 / 5 =', calc.divide(10, 5));
  console.log('2 ^ 3 =', calc.power(2, 3));

  console.log('\nString Utils Demo:');
  console.log('capitalize("hello") =', strUtils.capitalize('hello'));
  console.log('reverse("hello") =', strUtils.reverse('hello'));
  console.log('isPalindrome("racecar") =', strUtils.isPalindrome('racecar'));
  console.log('isPalindrome("hello") =', strUtils.isPalindrome('hello'));
}