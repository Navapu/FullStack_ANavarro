import express from 'express'
import {logMiddleware} from './middleware/logger.middleware.js';
import { logs } from './db/logs.js';
import { uniqueIDWare } from './middleware/uniqueid.middleware.js';
import { validateMiddleware } from './middleware/validate.middleware.js';
const app = express();


app.use(express.json())
app.use(uniqueIDWare)
app.use(logMiddleware);
app.get("/", (req, res) => {
    res.send('Middleware Playground')
})
app.get("/logs", (req, res) => {
    res.json(logs)
})

app.post('/users/add', validateMiddleware, (req, res) => {
    const {name, age} = req.body
    res.json({name: name, age: age})
})

app.listen(3000, () => {
    console.log('Listening in port 3000')
})