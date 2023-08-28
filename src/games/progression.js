#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomizer, makeProgression } from '../utils.js';
import { runEngine } from '../index.js';

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const firstNumber = randomizer(0, 10);
  const rateNumber = randomizer(0, 10); // if 0 progression repeats;
  const randomPosition = randomizer(0, 4);

  const progression = makeProgression(firstNumber, rateNumber);
  const removedNumber = String(progression.splice(randomPosition, 1, '...'));

  const question = readlineSync.question(`Question: ${progression} \nYour answer: `);
  const answer = removedNumber;
  return [question, answer];
};

export default runEngine(rules, generateRound);
