import readlineSync from 'readline-sync';
import { getRandomNum, askName } from '../src/index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const askQuestions = () => {
  const name = askName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const iter = (count) => {
    if (count < 3) {
      const randomNumber = getRandomNum();
      const answer = readlineSync.question(`Question: ${randomNumber}\n`);
      console.log(`Your answer: ${answer}`);
      if (answer !== 'yes' && answer !== 'no') {
        console.log(`'${answer}' is wrong answer ;(. Let's try again, ${name}!"`);
      }
      if (answer === 'yes' && isPrime(randomNumber)) {
        console.log('Correct!');
        iter(count + 1);
      }
      if (answer === 'yes' && !isPrime(randomNumber)) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!"`);
      }
      if (answer === 'no' && !isPrime(randomNumber)) {
        console.log('Correct!');
        iter(count + 1);
      }
      if (answer === 'no' && isPrime(randomNumber)) {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!"`);
      }
    }
    if (count >= 3) {
      console.log(`Congratulations, ${name}!`);
    }
  };
  return iter(0);
};

export default askQuestions;
