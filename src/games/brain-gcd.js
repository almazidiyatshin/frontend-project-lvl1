import runGame, { getRandomNum } from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const brainGcdRules = () => 'Find the greatest common divisor of given numbers.';

const brainGcdData = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return [question, answer];
};

export default () => runGame(brainGcdRules, brainGcdData);
