import readlineSync from 'readline-sync';

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const runGame = (gameRule, getGameData) => {
  const userName = greet();
  console.log(gameRule);

  const maxCountRound = 3;

  const iter = (currentRound) => {
    const data = getGameData();
    const [question, answer] = data;

    if (currentRound === maxCountRound) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!"`);
      return;
    }
    console.log('Correct!');
    iter(currentRound + 1);
  };

  return iter(0);
};

export default runGame;
