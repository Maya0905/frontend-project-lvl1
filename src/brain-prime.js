import primeGame from './games/prime.js';
import startGame from './index.js';

export default () => startGame('Answer "yes" if given number is prime. Otherwise answer "no".', primeGame);