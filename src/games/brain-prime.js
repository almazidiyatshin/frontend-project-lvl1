import runGame, { getRandomNum } from '../index.js';

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

const brainPrimeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrimeData = () => {
  const num = getRandomNum();
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(brainPrimeRules, brainPrimeData);
