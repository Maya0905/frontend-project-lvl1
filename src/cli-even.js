import readLineSync from 'readline-sync';

const parityCheck = () => {
  const name = readLineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const range = 100;
  const randomNumder = Math.raund(Math.random() * range);
  const numberOfRounds = 3;
  const correctAnswer = randomNumder % 2 === 0 ? 'yes' : 'no';

  for (let i = 0; i <= numberOfRounds; i += 1) {
    console.log(`Queston: ${randomNumder}`);
    const answer = readLineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default parityCheck;
