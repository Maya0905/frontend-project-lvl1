import getRandomNumber from '../utils/randomNumber.js';

const getRandomOperator = () => {
  const signs = ['-', '+', '*'];
  const index = getRandomNumber(0, 2);
  return signs[index];
};

const calculate = (x, y, sign) => {
  let result = 0;
  if (sign === '-') {
    result = x - y;
  }
  if (sign === '+') {
    result = x + y;
  }
  if (sign === '*') {
    result = x * y;
  }
  return result;
};

export default () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const sign = getRandomOperator();
  const mission = `${a} ${sign} ${b}`;
  const result = calculate(a, b, sign);
  return [mission, result];
};
