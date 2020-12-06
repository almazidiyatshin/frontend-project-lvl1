import runGame, { getRandomNum } from '../index.js';

const brainEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenData = () => {
  const num = getRandomNum();
  const question = num;
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(brainEvenRules, brainEvenData);
