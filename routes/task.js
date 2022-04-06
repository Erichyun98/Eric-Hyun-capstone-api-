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
    fs.writeFileSync('./data/tasklist.json', JSON.stringify(videos))
}
