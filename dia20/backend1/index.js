const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Hello world")
});

app.get('/contact', (req, res) => {
    res.send('Contact')
})

app.listen(3000, () => {
    console.log("Listening in port 3000")
});