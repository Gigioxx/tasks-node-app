const Task = require('./task');

/**
 * _list:
 *      { 'uuid-2348234-238424-3: { id:12, description: asd, completedIn: 20220202 } }
 */

class Tasks {

    _list = {};

    constructor() {
        this._list = {};
    }


    createTask( description = '' ) {

        const task = new Task( description );
        this._list[ task.id ] = task;

    }

}

module.exports = Tasks;