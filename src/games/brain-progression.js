import runGame from '../index.js';
import getRandomNum from '../utils.js';

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

const getProgressionWithHiddenElement = (progression, index) => {
  const newProgression = progression.slice();
  newProgression[index] = '..';
  return newProgression.join(' ');
};

const brainProgressionRules = 'What number is missing in the progression?';

const getBrainProgressionData = () => {
  const progression = getProgression();
  const hiddenElementIndex = getRandomNum(0, progression.length - 1);
  const question = getProgressionWithHiddenElement(progression, hiddenElementIndex);
  const answer = String(progression[hiddenElementIndex]);
  return [question, answer];
};

export default () => runGame(brainProgressionRules, getBrainProgressionData);
