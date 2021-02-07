const { mongoose } = require('./mongoose')


const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    }
})

const List = mongoose.model('List', ListSchema)

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})


const Task = mongoose.model('Task', TaskSchema)

module.exports = {
    List,
    Task
}