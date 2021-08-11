require('../src/db/mongoose')
const User = require('../src/models/user')

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60ff84fb6b8e48c48d5c2476', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})