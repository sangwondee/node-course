require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('6108bc6e452b2154cce72316').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})