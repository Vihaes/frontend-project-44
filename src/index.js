import { makeGreetings } from './cli.js';

makeGreetings();

export const runEngine = (rules, generateRound) => {
  console.log(rules);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i++) {
    const [question, answer] = generateRound();

    if (question == answer) {
      console.log('Correct!');
    } else {
      return false;
    }
  }
  console.log('Congratulations Sam, you are the champ!');
};
