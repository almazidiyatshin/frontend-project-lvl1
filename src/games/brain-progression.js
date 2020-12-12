import runGame from '../index.js';
import getRandomNum from '../utils.js';

const getProgression = (progressionStep = 10, progressionStart = 10, progressionLength = 10) => {
  const iter = (count, acc) => {
    if (count === 0) {
      const startAcc = acc.concat(progressionStart);
      return iter(count + 1, startAcc);
    }
    if (count === progressionLength) {
      return acc;
    }
    const newAcc = acc.concat(acc[count - 1] + progressionStep);
    return iter(count + 1, newAcc);
  };
  return iter(0, []);
};

const getProgressionWithHiddenElement = (progression, index) => {
  const newProgression = progression.slice();
  newProgression[index] = '..';
  return newProgression.join(' ');
};

const brainProgressionRule = 'What number is missing in the progression?';

const getBrainProgressionData = () => {
  const progression = getProgression(getRandomNum(), getRandomNum());
  const hiddenElementIndex = getRandomNum(0, progression.length - 1);
  const question = getProgressionWithHiddenElement(progression, hiddenElementIndex);
  const answer = String(progression[hiddenElementIndex]);
  return [question, answer];
};

export default () => runGame(brainProgressionRule, getBrainProgressionData);
