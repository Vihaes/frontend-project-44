export const randomizer = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

export const makeProgression = (firstNumber, rateNumber) => {
  const progression = [];
  progression.push(firstNumber);

  let numberContinuation = firstNumber + rateNumber;

  while (progression.length < 5) {
    progression.push(numberContinuation);
    numberContinuation += rateNumber;
  }

  return progression;
};
