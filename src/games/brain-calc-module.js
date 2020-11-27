import readlineSync from 'readline-sync';
import getRandomNum from '../index.js';
import askName from '../cli.js';

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

const startBrainCalcGame = () => {
  const name = askName();
  console.log('What is the result of the expression?');
  const maxCountRound = 3;
  const iter = (count) => {
    if (count < maxCountRound) {
      const randomNum1 = getRandomNum();
      const randomNum2 = getRandomNum();
      const randomOperator = getRandomOperator();
      const runOperation = getOperation(randomOperator);
      const operation = `${randomNum1} ${randomOperator} ${randomNum2}`;
      console.log(`Question: ${operation}`);
      const answer = readlineSync.question('Your answer: ');
      if (Number(answer) !== runOperation(randomNum1, randomNum2)) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was ${runOperation(randomNum1, randomNum2)}. Let's try again, ${name}!"`);
      }
      if (Number(answer) === runOperation(randomNum1, randomNum2)) {
        console.log('Correct!');
        iter(count + 1);
      }
    }
    if (count >= 3) {
      console.log(`Congratulations, ${name}!`);
    }
  };
  return iter(0);
};

export default startBrainCalcGame;
