import getRandomNumber from '../utils/randomNumber.js';
import startGame from '../index.js';

const gcd = (x, y) => {
  let a = x;
  let b = y;
  while (b !== 0) b = a % (a = b);
  return a;
};

const gcdGame = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const mission = `${a} ${b}`;
  const answer = gcd(a, b);
  const result = String(answer);

  return [mission, result];
};

export default () => startGame('Find the greatest common divisor of given numbers.', gcdGame);
