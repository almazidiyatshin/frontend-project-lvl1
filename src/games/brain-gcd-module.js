import { getRandomNum } from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const brainGcdRules = () => 'Find the greatest common divisor of given numbers.';

export const brainGcdCorrectAnswer = (value) => {
  const arrWithNums = value.split(' ').map((num) => Number(num));
  return String(gcd(arrWithNums[0], arrWithNums[1]));
};

export const brainGcdQuestion = () => `${getRandomNum()} ${getRandomNum()}`;
