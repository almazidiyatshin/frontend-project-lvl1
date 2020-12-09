import runGame from '../index.js';
import getRandomNum from '../utils.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const brainGcdRules = 'Find the greatest common divisor of given numbers.';

const getBrainGcdData = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const answer = String(findGcd(num1, num2));
  return [question, answer];
};

export default () => runGame(brainGcdRules, getBrainGcdData);
