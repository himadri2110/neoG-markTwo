const readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;
var game = chalk.bold.yellow('\'Do you really know India\'');

var name = readlineSync.question(chalk.bold('Hey, What\'s your name? '));
console.log(`Welcome, ${name}!`);

console.log('');

console.log(`Let\'s play a game ${game}`);

console.log('');

console.log(chalk.underline.bold.black.bgWhite('-- Level 1 --'));

console.log('');
function askQuestion(ques, ans, i) {
	var userAns = readlineSync.question(chalk.bold(`${i}. ${ques}`));

	if(userAns.toLowerCase() == ans.toLowerCase()) {
		console.log(chalk.bold.greenBright('Correct Answer :)'));
		score++;
	} else {
		console.log(chalk.bold.red('Incorrect Answer :('));
		console.log(chalk.bold.greenBright(`The correct answer is ${ans}`));
	}

	console.log(chalk.underline(`Score: ${score}`));
	console.log(" ");
}

var quesList = [
	{
		q: 'What is the capital of India? ',
		a: 'New Delhi',
	},
	{
		q: 'The population of which Indian city is the largest? ',
		a: 'Mumbai',
	},
	{
		q: 'How many states are there in India? ',
		a: '29',
	},
	{
		q: 'Which Indian State has the highest literacy rate? ',
		a: 'Kerala',
	},
	{
		q: 'How many countries border India? ',
		a: '6',
	},
	{
		q: 'Which is smallest Indian State by area? ',
		a: 'Goa',
	},	
	{
		q: 'Delhi is located along which river? ',
		a: 'Yamuna',
	},	
	{
		q: 'Which water body lies along the West of India? ',
		a: 'Arabian Sea',
	},	
	{
		q: 'Highest rainfall is experienced in which Indian State? ',
		a: 'Meghalaya',
	},	
	{
		q: 'What is the currency of India? ',
		a: 'Rupee',
	},	
	{
		q: 'Which is the most populous state of India? ',
		a: 'Uttar Pradesh',
	},	
	{
		q: 'Who was the first Indian to go to Space? ',
		a: 'Rakesh Sharma',
	},	
	{
		q: 'How many UTs are there in India? ',
		a: '9',
	},
	{
		q: 'Who wrote the Ramayana? ',
		a: 'Valmiki',
	},
	{
		q: 'The Kargil War took place in which year? ',
		a: '1999',
	},
];

for(var i=0; i<quesList.length; i++) {
	askQuestion(quesList[i]["q"], quesList[i]["a"], i+1);

	if(score == 5 && i!==quesList.length-1) {
		console.log(chalk.underline.black.bold.bgWhite('-- Level 2 --'));
		console.log(" ");
	} else if (score == 10 && i!==quesList.length-1) {
		console.log(chalk.underline.black.bold.bgWhite('-- Level 3 --'));
		console.log(" ");
	}
}

if(score >= 13) {
	console.log(chalk.underline.italic.bold.bgBlue(`Result: You scored ${score} points! You know India very well :)`));
} else if(score <=7) {
	console.log(chalk.underline.italic.bold.bgBlue(`Result: You scored ${score} points! You do not know India well :(`));
} else {
	console.log(chalk.underline.italic.bold.bgBlue(`Result: You scored ${score} points! You do not know India fairly well`));
}
