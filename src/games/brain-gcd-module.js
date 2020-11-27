import readlineSync from 'readline-sync';
import getRandomNum from '../index.js';
import askName from '../cli.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const startBrainGcdGame = () => {
  const name = askName();
  console.log('Find the greatest common divisor of given numbers.');
  const maxCountRound = 3;
  const iter = (count) => {
    if (count < maxCountRound) {
      const randomNum1 = getRandomNum();
      const randomNum2 = getRandomNum();
      console.log(`Question: ${randomNum1} ${randomNum2}`);
      const answer = readlineSync.question('Your answer: ');
      if (Number(answer) !== gcd(randomNum1, randomNum2)) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was ${gcd(randomNum1, randomNum2)}. Let's try again, ${name}!"`);
      }
      if (Number(answer) === gcd(randomNum1, randomNum2)) {
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

export default startBrainGcdGame;
