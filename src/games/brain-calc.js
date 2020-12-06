import runGame, { getRandomNum } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNum(0, operators.length);
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
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const brainCalcRules = () => 'What is the result of the expression?';

const brainCalcData = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(getOperation(operator)(num1, num2));
  return [question, answer];
};

export default () => runGame(brainCalcRules, brainCalcData);
