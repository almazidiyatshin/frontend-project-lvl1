import { getRandomNum } from '../index.js';

const getProgression = (progressionLength = 10) => {
  const difference = getRandomNum();
  const startProgression = getRandomNum();
  const result = [startProgression];
  const iter = (count) => {
    if (count === progressionLength) {
      return result;
    }
    result.push(result[count - 1] + difference);
    return iter(count + 1);
  };
  return iter(1);
};

const getProgressionWithoutElement = () => {
  const progression = getProgression();
  const hiddenElementIndex = getRandomNum(0, progression.length - 1);
  progression[hiddenElementIndex] = '..';
  return progression.join(' ');
};

export const brainProgressionRules = () => 'What number is missing in the progression?';

export const brainProgressionCorrectAnswer = (value) => {
  const arr = value.split(' ');

  let hiddenELementIndex = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '..') {
      hiddenELementIndex = i;
    }
  }

  let difference = 0;
  if (hiddenELementIndex > 1) {
    const prevElement = Number(arr[hiddenELementIndex - 1]);
    const prevPrevElement = Number(arr[hiddenELementIndex - 2]);
    difference = prevElement - prevPrevElement;
    return String(prevElement + difference);
  }
  const nextElement = Number(arr[hiddenELementIndex + 1]);
  const nextNextElement = Number(arr[hiddenELementIndex + 2]);
  difference = nextNextElement - nextElement;
  return String(nextElement - difference);
};

export const brainProgressionQuestion = () => getProgressionWithoutElement();
