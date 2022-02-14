const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: '1. Create task'
            },
            {
                value: '2',
                name: '2. Show tasks'
            },
            {
                value: '3',
                name: '3. Show completed tasks'
            },
            {
                value: '4',
                name: '4. Show pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Delete task(s)'
            },
            {
                value: '0',
                name: '0. Exit'
            },
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('======================'.green);
    console.log('   Select an option'.green);
    console.log('======================\n'.green);
    
    const { option } = await inquirer.prompt( questions );

    return option;

}

const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${ 'ENTER'.green } to continue`
        }
    ];
    
    console.log('\n');
    await inquirer.prompt( question );

}

module.exports = {
    inquirerMenu,
    pause
}