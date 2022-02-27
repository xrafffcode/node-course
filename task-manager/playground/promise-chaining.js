require('../src/db/mongoose')
const User = require('../src/models/user')

// 621b17ec6528114b5cb1d396

// User.findByIdAndUpdate('621b20a5518c4f559892203f', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('621b20a5518c4f559892203f', 3).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})