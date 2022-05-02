import readLineSync from 'readline-sync';

const greeting = () => {
    readLineSync.question('May I have your name?: ');  
    return `Hello, ${name}!`;
};
export default greeting;