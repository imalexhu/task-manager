const express = require('express')
const app = express()
const mongoose = require('./db/mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// load in modules
const { List, Task } = require('./db/modules')
const { response } = require('express')


// coppied
app.use(bodyParser.json())
app.use(cors())

// return array of lists from database
app.get('/lists', (req, res) => {
    List.find({}).then(list => res.send(list))
})

app.post('/lists', (req, res) => {
    // creates a new list and return the new list in JSON format
    let title = req.body.title;
    let newList = new List({
        title
    })
    newList.save().then(listDoc => res.send(listDoc))
})

app.delete('/lists', (req, res) => {
    List.deleteMany({}).then(res.send('deleatedAll'))
})

app.patch('/lists/:id', (req, res) => {
    List.findByIdAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(res.sendStatus(200))
})

app.delete('/lists/:id', (req, res) => {
    List.findByIdAndDelete({ _id: req.params.id }).then(removed => res.send(removed))
})


app.get('/lists/:_listId/tasks', (req, res) => {
    // return all tasks from a list
    Task.find({
        _listId: req.params._listId
    }).then(list => res.send(list))
})

app.post('/lists/:_listId/tasks', (req, res) => {
    // create new tasks inside of a specific list
    let title = req.body.title;
    let _listId = req.params._listId
    let newTask = new Task({
        title,
        _listId,
    })
    newTask.save().then(taskDoc => res.send(taskDoc))
})

// update specific task
app.patch('/lists/:_listId/tasks/:_taskId', (req, res) => {
    Task.findOneAndUpdate({
        _id: req.params._taskId,
        _listId: req.params._listId
    }, {
        $set: req.body
    }).then(res.sendStatus(200))
})

// delete specific task
app.delete('/lists/:_listId/tasks/:_taskId', (req, res) => {
    Task.findOneAndRemove({
            _id: req.params._taskId,
            _listId: req.params._listId
        })
        .then((removed) => {
            res.send(removed)
        })
})

// 

// find speecific task
app.get(('/lists/:_listId/tasks/:_taskId'), (req, res) => {
    Task.findOne({
        _id: req.params._taskId,
        _listId: req.params._listId
    }).then(response => res.send(response))
})


app.listen(3000, console.log("listening"))