import readlineSync from 'readline-sync';
import getRandomNum from '../index.js';
import askName from '../cli.js';

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

const getProgressionWithoutElement = (hiddenItem) => {
  const progression = getProgression();
  const hiddenIndex = getRandomNum(0, progression.length - 1);
  const temp = hiddenItem;
  temp[0] = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};

const startBrainProgressionGame = () => {
  const name = askName();
  console.log('What number is missing in the progression?');
  const maxCountRound = 3;
  const iter = (count) => {
    if (count < maxCountRound) {
      const hiddenItem = [];
      const progression = getProgressionWithoutElement(hiddenItem);
      console.log(`Question: ${progression}`);
      const answer = readlineSync.question('Your answer: ');
      if (Number(answer) !== hiddenItem[0]) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was ${hiddenItem}. Let's try again, ${name}!"`);
      }
      if (Number(answer) === hiddenItem[0]) {
        console.log('Correct!');
        iter(count + 1);
      }
    }
    if (count >= 3) {
      console.log(`Congratulations, ${name}!`);
    }
  };
  return iter(0);
};

export default startBrainProgressionGame;
