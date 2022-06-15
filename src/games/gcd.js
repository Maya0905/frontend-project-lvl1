import getRandomNumber from "../utils/randomNumber.js"
import startGame from '../index.js';

const gcd = (x, y) => {
    while (y !== 0) y = x % (x = y);
    return x;
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