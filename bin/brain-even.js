#!/usr/bin/env node
import readlineSync from "readline-sync";
import name, { hello as greetings } from "./cli.js";

console.log(greetings);

const gameEven = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(gameEven);

let winCounter = 0;
for (let i = 0; i < 3; i += 1) {
  const num = Math.floor(Math.random() * 100);
  const question = readlineSync.question(`Question: ${num} \nYour answer: `);

  if (num % 2 === 0 && question === "yes") {
    console.log("Correct!");
    winCounter += 1;
  } else if (num % 2 === 1 && question === "no") {
    console.log("Correct!");
    winCounter += 1;
  } else if (num % 2 === 1 && question === "yes") {
    console.log(
      "'yes' is wrong answer ;(. Correct answer was 'no' \nLet's try again, Jimm!"
    );
  } else if (num % 2 === 0 && question === "no") {
    console.log(
      "'no' is wrong answer ;(. Correct answer was 'yes' \nLet's try again, Tom!"
    );
  }

  if (winCounter >= 3) {
    console.log("Congratulations Sam, you are the champ!");
  }
}
