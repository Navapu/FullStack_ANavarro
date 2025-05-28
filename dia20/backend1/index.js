const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello world")
});

app.get('/contact', (req, res) => {
    res.send('Contact')
})

app.get("/contact/:id", (req, res) => {
    const idContact = req.params.id;
    res.send(`Contact id: ${idContact}`)
})
app.listen(3000, () => {
    console.log("Listening in port 3000")
});