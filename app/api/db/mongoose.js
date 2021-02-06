// handles all connection logic to the mongoDB database
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log('Connected')
}).catch((e) => {
    console.log("Mongose connection error")
})

module.exports = {
    mongoose
}