require('dotenv').config(); 
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');


// app.use(express.static('public'))
app.use(express.json());
app.use(cors());

let tasks = [
    {
        tasktitle: "Math Assignment",
        description: "unit 4 assignment",
        startdate: "04/20/22",
        enddate: "04/25/22",
        time: "11:59 AM",
        id: "1"
    },
    {
        tasktitle: "Reading a book",
        description: "reading at least one chapter everyday to complete the boot by next week",
        startdate: "04/14/22",
        enddate: "04/26/22",
        time: "12:00 PM",
        id: "2"
    },
    {
        tasktitle: "No junk food",
        description: "No eating junk food and spending money on fast food restaurants",
        startdate: "04/16/22",
        enddate: "04/24/22",
        time: "11:59 PM",
        id: "3"
    },
    {
        tasktitle: "Finishing capstone project",
        description: "Final project for Brainstation!",
        startdate: "04/01/22",
        enddate: "04/10/22",
        time: "11:59 PM",
        id: "4"
    }
];

app.get('/task', (req, res) => {
    res.status(200).json(tasks);
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
 
// const taskRoutes = require('./routes/task');
// app.use('/task', taskRoutes)


app.listen(PORT, () => { 
    console.log(PORT + ' is running')
})