const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js'); // ถ้าหาก export node ออกมาเป็น function ต้องเอาตัวแปล function มารองรับด้วย

//customize yarge version
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!');
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('Listing out all notes');
    }
});

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note');
    }
})

// add, remove, read, list
console.log(yargs.argv);