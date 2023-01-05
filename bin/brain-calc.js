#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name, { hello as greetings } from './cli.js';

console.log(greetings);

const gameCalc = 'What is the result of the expression?';
console.log(gameCalc);

const sign = ['+', '-', '*'];
let wonCounter = 0;
for (let i = 0; i < 3; i += 1) {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);

  const signRandomizer = Math.floor(Math.random() * sign.length);
  const randomizedSign = sign[signRandomizer];

  let sum = 0;
  let symb = 0;
  switch (randomizedSign) {
    case '+':
      sum = num1 + num2;
      symb = '+';
      break;
    case '-':
      sum = num1 - num2;
      symb = '-';
      break;
    case '*':
      sum = num1 * num2;
      symb = '*';
      break;
    default:
      console.log('');
  }

  sum = String(sum);
  // console.log(typeof sum);

  const question = readlineSync.question(
    `Question: ${num1} ${symb} ${num2} \nYour answer: `
  );

  if (sum === question) {
    console.log('Correct!');
    wonCounter += 1;
  } else if (sum !== question) {
    console.log(question + ' is wrong answer ;(. Correct answer was ' + sum + '\nLet\'s try again, Tom!');
  }

  if (wonCounter >= 3) {
    console.log('Congratulations Sam, you are the champ!');
  }
}

export default gameCalc;
