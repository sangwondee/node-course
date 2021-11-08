const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer');

const upload = multer({
    // destination folder
    dest: 'images',
    limits: {
        fileSize: 1000000, // หน่วยเป็น byte
    },
    fileFilter(req, file, cb) {
        // cb ย่อมากจาก callback
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        cb(undefined, true)
    }
})

app.post('/uploads', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Show port
app.listen(port, () => {
    console.log('Server is up on port ' + port);
})