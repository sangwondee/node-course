const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// Mongoose มันจะแปลงชื่อ Model จากตัวใหญ่เป็นตัวเล็กแล้วเติม s ให้อัตโนมัติ
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Does not contain password for set password')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
})

// const me = new User({
//     name: '  Wichan  ',
//     email: '  rightEmail@mail.com  ',
//     password: 'newCode'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error !', error)
// })


// กำหนดโครงสร้างข้อมูล structure
const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// สร้าง model ข้อมูล
const task = new Task({
    description: '  Eat lunch'
})

// save ข้อมูล
task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})