import readlineSync from 'readline-sync';
import askName from './cli.js';

export const getRandomNum = (min = 1, max = 20) => Math.floor(Math.random() * (max - min)) + min;

const startGame = (gameRules, gameQuestion, correctAnswer) => {
  const userName = askName();
  console.log(gameRules());

  const maxCountRound = 3;

  const iter = (currentCount) => {
    const valueQuestion = gameQuestion();
    if (currentCount < maxCountRound) {
      console.log(`Question: ${valueQuestion}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctAnswer(valueQuestion)) {
        console.log('Correct!');
        iter(currentCount + 1);
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer(valueQuestion)}. Let's try again, ${userName}!"`);
      }
    }
    if (currentCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  };

  return iter(0);
};

export default startGame;
