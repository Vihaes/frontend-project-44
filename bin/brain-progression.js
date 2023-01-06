#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name, { hello as greetings } from './cli.js';

console.log(greetings);

const gameGcd = 'What number is missing in the progression?';
console.log(gameGcd);

let winCounter = 0;
for (let i = 0; i < 3; i += 1) {
  const progression = [];

  const firstNumb = Math.floor(Math.random() * 10);
  const rateNumb = Math.floor(Math.random() * 10); // if 0 progression repeats;
  const randPos = Math.floor(Math.random() * 5);
  progression.push(firstNumb);

  let numbCont = 0;
  numbCont = firstNumb + rateNumb;

  while (progression.length < 5) {
    progression.push(numbCont);
    numbCont += rateNumb;
  }

  const removed = progression.splice(randPos, 1, '...');

  const question = readlineSync.question(
    `Question: ${progression} \nYour answer: `
  );

  const removedNum = String(removed);
  if (question === removedNum) {
    console.log('Ok George, you guessed right this time.');
    winCounter += 1;
  } else if (question !== removedNum) {
    console.log(
      question + ' is wrong answer ;(. Correct answer was ' + removedNum + '\nYour song is sung, Govard!...evil laugh...'
    );
    break;
  }

  if (winCounter >= 3) {
    console.log('Ohh no Gregory, you won.');
  }
}
