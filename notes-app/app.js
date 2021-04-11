const yargs = require('yargs'); // อ่านที่นี้เพิ่มเติม https://www.npmjs.com/package/yargs
const notes = require('./notes.js');

//customize yarge version
yargs.version('1.1.0');

// create add command
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
            describe: 'Note Body',
            demandOption: true,
            type: 'integer'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler () {
        console.log('Listing out all notes');
    }
});

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler () {
        console.log('Reading a note');
    }
})

yargs.parse()