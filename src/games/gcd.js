import getRandomNumber from "../utils/randomNumber.js"

const gcd = (x, y) => {
    while (y !== 0) y = x % (x = y);
    return x;
};

export default () => {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const mission = `${a} ${b}`;
    const result = gcd(a, b);
    return [mission, result];   
};