#!/usr/bin/env node

import inquirer from 'inquirer';

const todo: string[] = [];
let condition: boolean = true;

const askForTask = async (): Promise<void> => {
    const input: { task: string } = await inquirer.prompt({
        type: 'input',
        message: 'Enter a task',
        name: 'task'
    });
    todo.push(input.task);

    const confirm: { task: boolean } = await inquirer.prompt({
        type: 'confirm',
        message: 'Add another task?',
        name: 'task'
    });
    condition = confirm.task;

    if (condition) {
        await askForTask();
    } else {
        console.log('Your todo list:');
        todo.forEach(task => console.log('- ' + task));
    }
};

askForTask();
