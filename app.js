var chalk = require('chalk')
var yargs = require('yargs')
var notes = require('./notes')

//Customize the version of Yargs
yargs.version('1.1.0');

//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true ,          
            type: 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of removing note',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List the note',
    handler() {
        notes.listNote();
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read the node',
    builder:{
        title: {
            describe: 'Title of the read note',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

//add, remove , read, list


// console.log(yargs.argv)
yargs.parse()