import readlineSync from 'readline-sync';
import { getRandomNum, askName } from '../src/index.js';

const askQuestions = () => {
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const iter = (count) => {
    if (count < 3) {
      const randomNum = getRandomNum();
      const answer = readlineSync.question(`Question: ${randomNum} `);
      console.log(`Your answer: ${answer}`);
      if (answer !== 'yes' && answer !== 'no') {
        console.log(`'${answer}' is wrong answer ;(. Let's try again, ${name}!"`);
      }
      if (answer === 'yes' && randomNum % 2 === 0) {
        console.log('Correct!');
        iter(count + 1);
      }
      if (answer === 'yes' && randomNum % 2 !== 0) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!"`);
      }
      if (answer === 'no' && randomNum % 2 !== 0) {
        console.log('Correct!');
        iter(count + 1);
      }
      if (answer === 'no' && randomNum % 2 === 0) {
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
