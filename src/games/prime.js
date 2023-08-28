#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomizer } from '../utils.js';
import { runEngine } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculation = (number, question) => {
  let divisor = 2;

  while (number % divisor !== 0) {
    divisor += 1;
  }

  if (number === divisor && question === 'yes') {
    return question;
  } else if (number !== divisor && question === 'no') {
    return question;
  } else if (number !== divisor && question === 'yes') {
    return false;
  } else if (number === divisor && question === 'no') {
    return false;
  } else {
    throw new Error('${question} - is incorrect value!');
  }
};

const generateRound = () => {
  const number = randomizer(0, 100);

  const question = readlineSync.question(`Question: ${number} \nYour answer: `);
  const answer = String(calculation(number, question));

  return [question, answer];
};

export default runEngine(rules, generateRound);
