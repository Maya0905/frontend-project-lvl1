import getRandomNumber from '../utils/randomNumber.js';
import startGame from '../index.js';
const getSequence = () => {
  const sequenceBeginStart = 0;
  const sequenceBeginEnd = 20;
  let sequenceBegin = getRandomNumber(sequenceBeginStart, sequenceBeginEnd);
  const sequenceStart = 5;
  const sequenceEnd = 10;
  const sequencelength = getRandomNumber(sequenceStart, sequenceEnd);
  const diffStart = 0;
  const diffEnd = 10;
  const diff = getRandomNumber(diffStart, diffEnd);
  const sequence = [sequenceBegin];
  for (let i = 0; i <= sequencelength; i += 1) {
    sequenceBegin += diff;
    sequence.push(sequenceBegin);
  }
  return sequence;
};

const progressionGame = () => {
  const sequence = getSequence();
  const index = getRandomNumber(0, sequence.length - 1);
  const answer = sequence[index];
  const result = String(answer);
  sequence[index] = '..';
  const mission = sequence.join(' ');
  return [mission, result];
};

export default () => startGame('What number is missing in the progression?', progressionGame);
