import getRandomNumber from "../utils/randomNumber.js";

export default () => {
    const sequencelength = getRandomNumber(5, 10);
    let startNumber = getRandomNumber(0, 20);
    const diff = getRandomNumber(0, 10);
    let sequence = [startNumber];
    for (let i = 0; i <= sequencelength; i += 1) {
        startNumber += diff;
        sequence.push(startNumber);
    }
    const index = getRandomNumber(0, sequencelength);
    const result = sequence[index]
    sequence[index] = '..';
    const mission = sequence.join(' ');
    return [mission, result];
};