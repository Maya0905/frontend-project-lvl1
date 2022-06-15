import getRandomNumber from "../utils/randomNumber.js"
import startGame from '../index.js';

const isPrimeNumber = (number) => {
    if (number < 2) {
        return false;
      }
    for (let i = 2; i <= number / 2; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const primeGame = () => {
    const start = 0;
    const end = 1000;
    const mission = getRandomNumber(start, end);
    const result = isPrimeNumber(mission) ? 'yes' : 'no';
    return [mission, result];
};

export default () => startGame('Answer "yes" if given number is prime. Otherwise answer "no".', primeGame);

