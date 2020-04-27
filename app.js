const validator = require('validator')
const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//const command = process.argv[2]

// Customize the yargs version
yargs.version('1.1.0')

// Creating add command using yargs
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// Creating remove command using yargs
yargs.command({
    command: 'remove',
    describe: 'Remove the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

// Creating list command using yargs
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function() {
        notes.list()
    }
})

// Creating read command using yargs
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function() {
        console.log('Read the note')
    }
})

// Calling yargs to parse
yargs.parse()
