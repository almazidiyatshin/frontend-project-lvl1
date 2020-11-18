#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNum = (a = 1, b = 20) => {
  const min = a;
  const max = b;
  return Math.floor(Math.random() * (max - min)) + min;
};

const getProgression = () => {
  const difference = getRandomNum();
  const startProgression = getRandomNum();
  const result = [startProgression];
  const iter = (count) => {
    if (count === 10) {
      return result;
    }
    result.push(result[count - 1] + difference);
    return iter(count + 1);
  };
  return iter(1);
};

const getProgressionWithoutElement = (hiddenItem) => {
  const hiddenIndex = getRandomNum(0, 9);
  const progression = getProgression();
  hiddenItem[0] = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const name = askName();

const askQuestions = () => {
  const iter = (count) => {
    if (count < 3) {
      const hiddenItem = [];
      const progression = getProgressionWithoutElement(hiddenItem);
      const answer = readlineSync.question(`Question: ${progression}\n`);
      console.log(`Your answer: ${answer}`);
      if (Number(answer) !== hiddenItem[0]) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was ${hiddenItem}. Let's try again, ${name}!"`);
      }
      if (Number(answer) === hiddenItem[0]) {
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

console.log('What number is missing in the progression?');
askQuestions();
