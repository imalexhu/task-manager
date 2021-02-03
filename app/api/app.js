const express = require('express')
const app = express()

// load in modulesl
const { List, Task } = require('module')

// return array of lists from database
app.get('/lists', (req, res) => {
    List.find({}).then(list => res.send(list))
})

app.post('/lists', (req, res) => {
    // creates a new list and return the new list in JSON format
    res.send("Whats cooking Good looking")
})

app.patch('/lists/:id', (req, res) => {
    //modify the data of a specific list using a specific id
    res.send("Whats cooking Good looking")
})

app.delete('/lists/:id', (req, res) => {
    //removes the given list based on the id 
    res.send("Whats cooking Good looking")
})



app.listen(3000, console.log("listening"))