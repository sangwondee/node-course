// CRUD created read update delete
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
       return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Wichan',
    //     age: 31
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    //     console.log(result.insertedCount);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Wichan1',
    //         age: 1
    //     }, {
    //         name: 'Wichan2',
    //         age: 2
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    // })

    const tasksData = [
        { description : 'Clean the house', completed : true },
        { description : 'Renew inspection', completed : false },
        { description : 'Pot plants', completed : false }
    ]

    db.collection('tasks').insertMany(tasksData, (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks !');
        }

        console.log(result.ops);
    })


})