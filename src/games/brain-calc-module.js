import { getRandomNum } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const getOperation = (operator) => {
  switch (operator) {
    case '+':
      return (a, b) => a + b;
    case '-':
      return (a, b) => a - b;
    case '*':
      return (a, b) => a * b;
    default:
      return null;
  }
};

export const brainCalcRules = () => 'What is the result of the expression?';

export const brainCalcCorrectAnswer = (value) => {
  const arrWithOperationSymbols = value.split(' ');
  const operation = getOperation(arrWithOperationSymbols[1]);
  return String(operation(Number(arrWithOperationSymbols[0]), Number(arrWithOperationSymbols[2])));
};

export const brainCalcQuestion = () => `${getRandomNum()} ${getRandomOperator()} ${getRandomNum()}`;
