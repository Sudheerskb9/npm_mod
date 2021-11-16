const chalk=require('chalk');
const validator=require('validator');
//console.log(chalk.blue.italic.inverse('Helloworld'));
//console.log(chalk.red.inverse('false'));
//console.log(chalk.green.underline.inverse('sucess'));
const res =validator.isEmail("sudheerskb9@gmail.com");
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));