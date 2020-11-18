#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNum = (min = 1, max = 20) => Math.floor(Math.random() * (max - min)) + min;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const actions = {
  plus: {
    value: '+',
    func: (a, b) => a + b,
  },
  minus: {
    value: '-',
    func: (a, b) => a - b,
  },
  multiple: {
    value: '*',
    func: (a, b) => a * b,
  },
};

const entries = Object.entries(actions);

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const name = askName();

const askQuestions = () => {
  const iter = (count) => {
    if (count < 3) {
      const randomNum1 = getRandomNum();
      const randomNum2 = getRandomNum();
      const randomOperator = getRandomOperator();
      const funcOperation = entries
        .reduce((acc, el) => (el[1].value === randomOperator ? el[1].func : acc), []);
      const operation = `${randomNum1} ${randomOperator} ${randomNum2}`;
      const answer = readlineSync.question(`Question: ${operation} `);
      console.log(`Your answer: ${answer}`);
      if (Number(answer) !== funcOperation(randomNum1, randomNum2)) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was ${funcOperation(randomNum1, randomNum2)}. Let's try again, ${name}!"`);
      }
      if (Number(answer) === funcOperation(randomNum1, randomNum2)) {
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

console.log('What is the result of the expression?');
askQuestions();
