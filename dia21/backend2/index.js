import express, { text } from 'express'
const app = express();

//Middleware

app.use(express.json());

// Load static content
//app.use(express.static("public"))
app.use("/landing", express.static("public"))
app.get("/", (req, res) => {
    res.send("Welcome")
})

const tasks = [
    { id: 1, text: "Learn Express", isComplete: false },
    { id: 2, text: 'Create an API Restfull', isComplete: false }
];

app.get('/api/v1/tasks', (req, res) => {
    res.json(tasks)
})

app.get('/api/v1/tasks/:id', (req, res) => {
    const { id } = req.params
    const task = tasks.find(t => t.id === Number(id));

    if (!task) {
        return res.status(404).json({msg: 'Task not found'});
    }

    res.status(200).json(task);
})

app.post('/api/v1/tasks', (req, res) => {
    const { text, isComplete } = req.body
    tasks.push({id: tasks.length + 1, text: text, isComplete: isComplete})
    res.status(201).json(tasks)
})

app.listen(3000, () => {
    console.log('Listening in port 3000')
})