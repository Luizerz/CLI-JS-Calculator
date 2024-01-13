import { Command } from 'commander';

const program = new Command()

program
    .name('CLI-Calculator')
    .description('A CLI Calculator mande in JavaScript using NodeJS and Commander')
    .version('0.0.1');

program.command('sum')
    .argument('<number>', 'O primeiro adendo')
    .argument('<number>', 'O segundo adendo')
    .action((num1, num2) => {
        const sum = Number(num1) + Number(num2)
        sum ? console.log(sum) : console.log('Wrong argument - sum usage: sum <number> <number>')
    })

program.command('minus')
    .argument('<number>', 'O minuendo')
    .argument('<number>', 'O subtraendo')
    .action((num1, num2) => {
        const minus = Number(num1) - Number(num2)
        minus ? console.log(minus) : console.log('Wrong argument - minus usage: minus <number> <number>')
    })

program.command('div')
    .argument('<number>', 'O dividendo')
    .argument('<number>', 'O divisor')
    .action((num1, num2) => {
        const div = Number(num1) / Number(num2)
        div ? console.log(div) : console.log('Wrong argument - div usage: div <number> <number>')
    })

program.command('multiply')
    .argument('<number>', 'O multiplicando')
    .argument('<number>', 'O multiplicador')
    .action((num1, num2) => {
        const multiply = Number(num1) * Number(num2)
        multiply ? console.log(multiply) : console.log('Wrong argument - multiply usage: multiply <number> <number>')
    })
program.parse();

