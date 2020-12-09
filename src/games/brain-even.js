import runGame from '../index.js';
import getRandomNum from '../utils.js';

const brainEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getBrainEvenData = () => {
  const question = getRandomNum();
  const answer = isEven(question);
  return [question, answer];
};

export default () => runGame(brainEvenRules, getBrainEvenData);
