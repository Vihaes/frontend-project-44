#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomizer } from '../utils.js';
import { runEngine } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculation = (firstNumber, secondNumber) => {
  if (firstNumber === 0) {
    return secondNumber;
  }
  return calculation(secondNumber % firstNumber, firstNumber);
};

const generateRound = () => {
  const firstNumber = randomizer(0, 50);
  const secondNumber = randomizer(0, 50);

  const question = readlineSync.question(
    `Question: ${firstNumber} ${secondNumber} \nYour answer: `
  );
  const answer = String(calculation(firstNumber, secondNumber));
  return [question, answer];
};

export default runEngine(rules, generateRound);
