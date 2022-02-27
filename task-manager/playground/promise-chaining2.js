require('../src/db/mongoose')
const Task = require('../src/models/task')

//621b187ce3ae145ccce9e1fc

// Task.findByIdAndUpdate('621b2452fa1ae854c8a991aa').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('621b2452fa1ae854c8a991aa', true).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})