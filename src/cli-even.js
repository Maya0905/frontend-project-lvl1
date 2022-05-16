import readLineSync from 'readline-sync';

const parityCheck = () => {
  const name = readLineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const max = 100;
  const numberOfRounds = 3;

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const randomNumber = Math.ceil(Math.random() * max);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Queston: ${randomNumber}`);
    const answer = readLineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (i === numberOfRounds) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default parityCheck;
