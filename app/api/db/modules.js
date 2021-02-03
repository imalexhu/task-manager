const { mongoose } = require('./mongose')

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    }
})

const List = mongose.Model('List', ListSchema)

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})


const Task = mongose.Model('localhost:27017/TaskManager', TaskSchema)

module.exports = {
    List,
    Task
}