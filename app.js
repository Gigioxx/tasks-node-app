require('colors');

const { saveInfo, readInfo } = require('./helpers/saveFile');
const {
    inquirerMenu,
    pause,
    readInput
} = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async() => {

    console.log('Hola mundo');

    let opt = '';
    const tasks = new Tasks();

    const tasksInfo = readInfo();

    if ( tasksInfo ) {
        // Establecer tareas
    }

    await pause();

    do {
        // Show Menu
        opt = await inquirerMenu();

        switch ( opt ) {
            case '1':
                // Create
                const description = await readInput('Description:');
                tasks.createTask( description );
            break;

            case '2':
                console.log( tasks.listArr );
            break;
        }

        // saveInfo( tasks.listArr );

        await pause();

    } while ( opt !== '0' );
    
    // pause();

}

main();