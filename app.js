require('colors');

const { saveInfo, readInfo } = require('./helpers/saveFile');
const {
    inquirerMenu,
    pause,
    readInput,
    listDeletingTasks,
    confirm,
    showChecklist
} = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async() => {

    console.log('Hola mundo');

    let opt = '';
    const tasks = new Tasks();

    const tasksInfo = readInfo();

    if ( tasksInfo ) {
        tasks.loadTasksFromArray( tasksInfo );
    }

    do {
        // Show Menu
        opt = await inquirerMenu();

        switch ( opt ) {
            // Create Task
            case '1':
                const description = await readInput('Description:');
                tasks.createTask( description );
            break;

            // Show all tasks
            case '2':
                tasks.fullList();
            break;

            // Show completed tasks
            case '3':
                tasks.showCompletedPending( true );
            break;

            // Show pending tasks
            case '4':
                tasks.showCompletedPending( false );
            break;

            // Select tasks to complete
            case '5':
                const ids = await showChecklist( tasks.listArr );
                console.log( ids );
            break;

            // Delete task from the list
            case '6':
                const id = await listDeletingTasks( tasks.listArr );
                if ( id !== '0' ) {
                    const ok = await confirm('Are you sure?');
                    if ( ok ) {
                        tasks.deleteTask( id );
                        console.log('Task deleted');
                    }
                }
            break;
        }

        saveInfo( tasks.listArr );

        await pause();

    } while ( opt !== '0' );
    
    // pause();

}

main();