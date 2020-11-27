import { getRandomNum } from '../index.js';

export const brainEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const brainEvenCorrectAnswer = (value) => (value % 2 === 0 ? 'yes' : 'no');

export const brainEvenQuestion = () => getRandomNum();
