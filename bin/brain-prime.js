#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name, { hello as greetings } from './cli.js';

console.log(greetings);

const gamePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(gamePrime);

let winCounter = 0;
for (let i = 0; i < 3; i += 1) {
  const num = Math.floor(Math.random() * 100);
  const question = readlineSync.question(`Question: ${num} \nYour answer: `);
  // console.log(typeof question);

  let div = 2;
  while (num % div !== 0) {
    div += 1;
  }

  if (num === div && question === 'yes') {
    console.log('Correct!');
    winCounter += 1;
  } else if (num === div && question === 'no') {
    console.log(
      '"no" is wrong answer ;(. Correct answer was "yes" \nLet\'s try again, Bob!'
    );
  } else if (num !== div && question === 'no') {
    console.log('Correct!');
    winCounter += 1;
  } else if (num !== div && question === 'yes') {
    console.log(
      '"yes" is wrong answer ;(. Correct answer was "no" \nLet\'s try again, Harry!'
    );
  }

  if (winCounter >= 3) {
    console.log('Congratulations Will, you are the champ!');
  }
}
