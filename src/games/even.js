import getRandomNumber from '../utils/randomNumber.js';
import startGame from '../index.js';

const brainEven = () => {
  const mission = getRandomNumber();
  const result = mission % 2 === 0 ? 'yes' : 'no';
  return [mission, result];
};

export default () => startGame('Answer "yes" if the number is even, otherwise answer "no".', brainEven);
