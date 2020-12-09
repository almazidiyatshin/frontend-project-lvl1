import runGame from '../index.js';
import getRandomNum from '../utils.js';

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

const brainPrimeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getBrainPrimeData = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(brainPrimeRules, getBrainPrimeData);
