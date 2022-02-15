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

    createTask( description = '' ) {

        const task = new Task( description );
        this._list[ task.id ] = task;

    }
    
    deleteTask( id = '' ) {

        if ( this._list[id] ) {
            delete this._list[id];
        }

    }

    loadTasksFromArray( tasks = [] ) {

        tasks.forEach( task =>{
            this._list[ task.id ] = task;    
        });

    }

    fullList() {

        console.log();
        this.listArr.forEach( (task, i) => {

            const idx = `${i + 1}`;
            const { description, completedIn } = task;
            const status = ( completedIn ) ? 'Completed'.green : 'Pending'.red;

            console.log( `${ (idx + '.').green } ${ description } :: ${ status }` );

        });

    }

    showCompletedPending( completed = true ) {

        console.log();
        let index = 0;
        this.listArr.forEach( (task) => {

            const { description, completedIn } = task;
            const status = ( completedIn ) ? 'Completed'.green : 'Pending'.red;

            if ( completed ) {
                if ( completedIn ) {
                    index += 1;
                    console.log( `${ (index + '.').green } ${ description } :: ${ completedIn.green }` );
                }
            } else {
                if ( !completedIn ) {
                    index += 1;
                    console.log( `${ (index + '.').green } ${ description } :: ${ status }` );
                }
            }

        });

    }

    toggleCompleted( ids = [] ) {

        ids.forEach( id => {

            const task = this._list[id];
            if ( !task.completedIn ) {
                task.completedIn = new Date().toISOString();
            }

        });

        this.listArr.forEach( task => {

            if ( !ids.includes( task.id ) ) {
                this._list[task.id].completedIn = null; 
            }

        });

    }

}

module.exports = Tasks;