import readLineSync from 'readline-sync';

const greeting = () => {
   const name = readLineSync.question('May I have your name?: ');  
    console.log(`Hello, ${name}!`);
};
export default greeting;