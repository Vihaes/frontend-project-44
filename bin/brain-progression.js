#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name, { hello as greetings } from './cli.js';

console.log(greetings);

const gameGcd = 'What number is missing in the progression?';
console.log(gameGcd);

const progression = [];
let winCounter = 0;
for (let i = 0; i < 3; i += 1) {
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const question = readlineSync.question(
    `Question: ${num1} ${num2} \nYour answer: `
  );
}
