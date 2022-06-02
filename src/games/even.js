import getRandomNumber from "../utils/randomNumber.js"

export default () => {
    const mission = getRandomNumber();
    const result = mission % 2 === 0 ? 'yes' : 'no';
    return [mission, result];
};
