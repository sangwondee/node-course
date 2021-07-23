// CRUD created read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
       return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName)

    db.collection('tasks').updateMany({
        completed : false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60f911eec418361c2303967c")
    // }, {
    //     $inc: {
    //         age: 1,
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
})