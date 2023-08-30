#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomizer } from '../utils.js';
import { runEngine } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

let result;
const calculation = (number, question) => {
  if (number % 2 === 0 && question === 'yes') {
    result = question;
  } else if (number % 2 === 1 && question === 'no') {
    result = question;
  } else if (number % 2 === 1 && question === 'yes') {
    return false;
  } else if (number % 2 === 0 && question === 'no') {
    return false;
  } else {
    throw new Error(`${question} - is incorrect value!`);
  }

  return result;
};

const generateRound = () => {
  const number = randomizer(0, 100);

  const question = readlineSync.question(`Question: ${number} \nYour answer: `);
  const answer = String(calculation(number, question));

  return [question, answer];
};

export default runEngine(rules, generateRound);
