#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name, { hello as greetings } from './cli.js';

console.log(greetings);

const gameGcd = 'Find the greatest common divisor of given numbers.';
console.log(gameGcd);

let winCounter = 0;
for (let i = 0; i < 3; i += 1) {
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const question = readlineSync.question(
    `Question: ${num1} ${num2} \nYour answer: `
  );

  let maxDiv = 0;
  if (num1 >= num2) {
    maxDiv = num2;
  } else {
    maxDiv = num1;
  }

  while (num1 % maxDiv !== 0 && num2 % maxDiv !== 0) {
    maxDiv -= 1;
  }

  maxDiv = String(maxDiv);
  if (maxDiv === question) {
    console.log('Correct!');
    winCounter += 1;
  } else if (maxDiv !== question) {
    console.log(question + ' is wrong answer ;(. Correct answer was ' + maxDiv + '\nLet\'s try again, Govard!');
  }

  if (winCounter >= 3) {
    console.log('Congratulations William, you are the champ!');
  }
}
