import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const brainEven = () => {
  const question = getRandomNumber();
  const ansver = question % 2 === 0 ? 'yes' : 'no';
  return [question, ansver];
};

export default () => startGame('Answer "yes" if the number is even, otherwise answer "no".', brainEven);
