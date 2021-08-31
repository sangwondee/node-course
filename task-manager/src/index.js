const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Show port
app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

const User = require('./models/user')

const main = async () => {
    const user = await User.findById('612c5b18a2b5100a3377e305')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()