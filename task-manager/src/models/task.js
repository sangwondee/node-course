const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    // เชื่อมกับตาราง User
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task