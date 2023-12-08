/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero.");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // To remove extra space or WhiteSpace
    const cleanedExpression = expression.replace(/\s+/g, "");
    console.log(cleanedExpression);
    if (!/^[0-9+\-*/().]+$/.test(cleanedExpression)) {
      throw new Error("Invalid input expression.");
    }

    try {
      // Evaluate the expression using eval
      return eval(cleanedExpression);
    } catch (error) {
      throw new Error("Invalid expression format.");
    }
  }
}

const myCalc = new Calculator();
myCalc.add(5);
console.log(myCalc.getResult());
console.log(myCalc.calculate(`5+2  -1`));

export { Calculator };

// Learning Regex
// Certainly! Let's break down the regular expression /^[0-9+\-*/().]+$/:

// /: Delimiters: These indicate the start and end of the regular expression.

// ^: Anchors the regex at the beginning of the string. It asserts that the match must start at the beginning of the string.

// [0-9+\-*/().]: Character Class: This defines a set of characters that are allowed in the string. Here's what each character means:

// 0-9: Any digit from 0 to 9.
// +, -, *, /: The basic arithmetic operators.
// (, ): Opening and closing parentheses.
// +: Quantifier: Matches one or more occurrences of the characters defined in the character class.

// $: Anchor: Asserts that the match must occur at the end of the string.

// Putting it all together, the regular expression ensures that the entire string:

// Starts with one or more characters from the set [0-9+\-*/().].
// Ends after one or more characters from the set [0-9+\-*/().].
