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

}

module.exports = Tasks;