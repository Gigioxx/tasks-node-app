const Task = require('./task');

/**
 * _list:
 *      { 'uuid-2348234-238424-3: { id:12, description: asd, completedIn: 20220202 } }
 */

class Tasks {

    _list = {};

    get listArr() {

        const list = [];

        Object.keys( this._list ).forEach( key => {
            const tarea = this._list[key];
            list.push( tarea );
        });

        return list;

    }

    constructor() {
        this._list = {};
    }

    loadTasksFromArray( tasks = [] ) {

        tasks.forEach( task =>{
            this._list[ task.id ] = task;    
        });

    }

    createTask( description = '' ) {

        const task = new Task( description );
        this._list[ task.id ] = task;

    }

    fullList() {

        console.log();
        this.listArr.forEach( (task, i) => {

            const idx = `${i + 1}`.green;
            const { description, completedIn } = task;
            const status = ( completedIn ) ? 'Completed'.green : 'Pending'.red;

            console.log( `${ idx } ${ description } :: ${ status }` );

        });

    }

}

module.exports = Tasks;