import getRandomNumber from '../utils/randomNumber.js';
import startGame from '../index.js';

const getRandomOperator = (index) => {
  const signs = ['-', '+', '*'];
  return signs[index];
};

const calculate = (x, y, sign) => {
  switch (sign) {
    case '-':
      return x - y;
    case '+':
      return x + y;
    case '*':
      return x * y;
    default:
      throw new Error('The sign is incorrect');
  }
};

const brainCalc = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const indexStart = 0;
  const indexEnd = 2;
  const sign = getRandomOperator(indexStart, indexEnd);
  const mission = `${a} ${sign} ${b}`;
  const answer = calculate(a, b, sign);
  const result = String(answer);
  return [mission, result];
};

export default () => startGame('What is the result of the expression?', brainCalc);
