import runGame, { getRandomNum } from '../index.js';

const getProgression = (progressionLength = 10) => {
  const stepProgression = getRandomNum();
  const startProgression = getRandomNum();
  const iter = (count, acc) => {
    if (count === progressionLength) {
      return acc;
    }
    const newAcc = acc.concat(acc[count - 1] + stepProgression);
    return iter(count + 1, newAcc);
  };
  return iter(1, [startProgression]);
};

const getProgressionWithoutElement = (progression, index) => {
  const newProgression = progression.slice();
  newProgression[index] = '..';
  return newProgression.join(' ');
};

const brainProgressionRules = () => 'What number is missing in the progression?';

const brainProgressionData = () => {
  const progression = getProgression();
  const hiddenElementIndex = getRandomNum(0, progression.length - 1);
  const question = getProgressionWithoutElement(progression, hiddenElementIndex);
  const answer = String(progression[hiddenElementIndex]);
  return [question, answer];
};

export default () => runGame(brainProgressionRules, brainProgressionData);
