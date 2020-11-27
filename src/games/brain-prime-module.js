import { getRandomNum } from '../index.js';

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

export const brainPrimeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const brainPrimeCorrectAnswer = (value) => (isPrime(value) ? 'yes' : 'no');

export const brainPrimeQuestion = () => getRandomNum();
