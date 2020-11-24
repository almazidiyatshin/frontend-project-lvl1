import readlineSync from 'readline-sync';

export const getRandomNum = (min = 1, max = 20) => Math.floor(Math.random() * (max - min)) + min;

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
