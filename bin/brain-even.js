#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from './cli.js';

const gameEven = 'Answer "yes" if the number is even, otherwise answer "no".';

for (let i = 0; i < 3; i += 1) {
  const num = Math.floor(Math.random() * 100);
  const question = readlineSync.question(`Question: ${num} \nYour answer: `);

  if (num % 2 === 0 && question === 'yes') {
    console.log('Correct!');
  } else if (num % 2 === 1 && question === 'no') {
    console.log('Correct!');
  } else if (num % 2 === 1 && question === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no' \nLet's try again, Jimm!");
  } else if (num % 2 === 0 && question === 'no') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes' \nLet's try again, Tom!");
  }

  const score = i + 1;
  if (score === 3) {
    console.log('Congratulations Sam, you are the champ!');
  }
}