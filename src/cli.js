import readlineSync from 'readline-sync';

export const makeGreetings = () => {

  const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Heey ${name}!`);
};
