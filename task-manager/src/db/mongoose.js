const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Wichan',
//     age: 'sangwondee'
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// Mongoose มันจะแปลงชื่อ Model จากตัวใหญ่เป็นตัวเล็กแล้วเติม s ให้อัตโนมัติ
const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'lorem',
    completed: true
})

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})