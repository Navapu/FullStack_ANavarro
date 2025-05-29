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


app.listen(3000, () => {
    console.log('Listening in port 3000')
})