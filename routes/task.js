const fs = require('fs');
const express = require('express');
const cors = require('cors');
const router = express.Router();
const {v4: uuidv4} = require('uuid');

const getTasks = () => { 
    const tasks = fs.readFilesSync('./data/tasklist.json')
    return JSON.parse(tasks)
}

const saveTasks = (tasks) => { 
    fs.writeFileSync('./data/tasklist.json', JSON.stringify(tasks))
}

let formattedTasks = getTasks()
    .map(task => {
        return {
            "tasktitle": task.tasktitle,
            "description": task.description,
            "startdate": task.startdate,
            "enddate": task.enddate,
            "time": task.time,
            "id": task.id
        }
    })

app.get('/task', (req, res) => {
    res.status(200).json(formattedTasks);
});


app.post('/task', (req, res) => {
    const newTask = {
        tasktitle: req.body.tasktitle,
        description: req.body.description,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        time: req.body.time,
        id: uuidv4()
    }

    tasks.push(newTask)
    res.json(tasks)
})

app.delete('/task/delete/:id', (req,res)=> {
    tasks = tasks.filter(task => task.id !== req.params.id);
    console.log(tasks);
    res.json(tasks)
})
