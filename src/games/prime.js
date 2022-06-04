import getRandomNumber from "../utils/randomNumber.js"

const isPrimeNumber = (number) => {
    for (let i = 2; i <= number / 2; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

export default () => {
    const mission = getRandomNumber(6, 100);
    const result = isPrimeNumber(mission) ? 'yes' : 'no';
    return [mission, result];
};

