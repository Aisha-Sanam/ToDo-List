#!/usr/bin/env node
import inquirer from 'inquirer';
const todo = [];
let condition = true;
const askForTask = async () => {
    const input = await inquirer.prompt({
        type: 'input',
        message: 'Enter a task',
        name: 'task'
    });
    todo.push(input.task);
    const confirm = await inquirer.prompt({
        type: 'confirm',
        message: 'Add another task?',
        name: 'task'
    });
    condition = confirm.task;
    if (condition) {
        await askForTask();
    }
    else {
        console.log('Your todo list:');
        todo.forEach(task => console.log('- ' + task));
    }
};
askForTask();
