// handles all connection logic to the mongoDB database
const mongoose = require('mongodb')

mongoose.MongoClient.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true, }).then(() => {
    console.log('Connected')
}).catch((e) => {
    console.log("Mongose connection error")
})

module.exports = {
    mongoose
}