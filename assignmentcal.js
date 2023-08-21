function calculatorFactory(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operator";
    }
}

// Example usage
const num1 = 10;
const num2 = 5;

const additionResult = calculatorFactory(num1, num2, "+");
console.log(`Addition: ${additionResult}`);

const subtractionResult = calculatorFactory(num1, num2, "-");
console.log(`Subtraction: ${subtractionResult}`);

const multiplicationResult = calculatorFactory(num1, num2, "*");
console.log(`Multiplication: ${multiplicationResult}`);

const divisionResult = calculatorFactory(num1, num2, "/");
console.log(`Division: ${divisionResult}`);