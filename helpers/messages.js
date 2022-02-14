require('colors');


const showMenu = () => {

    console.clear();
    console.log('======================'.green);
    console.log('   Select an option'.green);
    console.log('======================\n'.green);

    console.log(`${ '1.'.green } Create task`);
    console.log(`${ '2.'.green } Show tasks`);
    console.log(`${ '3.'.green } Show completed tasks`);
    console.log(`${ '4.'.green } Show pending tasks`);
    console.log(`${ '5.'.green } Complete tasks`);
    console.log(`${ '6.'.green } Delete tasks`);
    console.log(`${ '0.'.green } Exit\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Select an option: ', ( opt ) => {
        readline.close();
    });

}

const pause = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPress ${ 'ENTER'.green } to continue\n`, ( opt ) => {
        readline.close();
    });
}

module.exports = {
    showMenu,
    pause
}