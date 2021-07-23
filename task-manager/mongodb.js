// CRUD created read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
       return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName)

    // เราไม่สามารถใช้ id ได้เลยเพราะมันยังต้องเข้ารหัสอยู่
    const userId = new ObjectID('60f914e9be47464b1f0176e3');

    // db.collection('users').findOne({ _id: userId }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 31 }).toArray((error, users) => {
    //     console.log(users);
    // })

    db.collection('tasks').findOne({_id: userId }, (error, task) => {
        if (error) {
            return console.log('Your data not found !!!');
        }
        console.log(task);
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks);
    })
})