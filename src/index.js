import readLineSync from 'readline-sync';

export default (question, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  const numberOfRounds = 3;

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [mission, result] = game();
    const correctAnswer = String(result);

    console.log(`Question: ${mission}`);
    const answer = readLineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (i === numberOfRounds) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};
