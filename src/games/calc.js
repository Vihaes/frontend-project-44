#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomizer from '../utils.js';
import { runEngine } from '../index.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[randomizer(0, operators.length - 1)];
};

const calculation = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Operator ${operator} - is incorrect!');
  }
};

const generateRound = () => {
  const firstNumber = randomizer(0, 100);
  const secondNumber = randomizer(0, 100);
  const operator = getRandomOperator();

  const question = readlineSync.question(
    `Question: ${firstNumber} ${operator} ${secondNumber} \nYour answer: `
  );
  const answer = String(calculation(firstNumber, secondNumber, operator));
  return [question, answer];
};

export default runEngine(rules, generateRound);
