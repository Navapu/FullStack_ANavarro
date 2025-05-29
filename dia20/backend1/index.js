import express from 'express'
const app = express();


app.use(express.json())
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
app.patch('/contact/:id', (req, res) => {
    const {id} = req.params;
    const {action} = req.query;
    const {mail, oldPass, newPass} = req.body;
    
    console.log(`id: ${id}`)
    console.log(`action: ${action}`)
    console.log(`mail: ${mail}`)

    if(action === 'changePassword'){
        res.send('Changing password...')
    }else{
        res.send('Page not found')
    }
})

app.get('/product/:id', (req, res) => {
    res.json({product: "Table", price: 100})
})

app.get('/error', (req, res) => {
    res.status(404).send('Page not found')
})

app.get('/redirect', (req, res) => {
    setTimeout (() => {
        res.redirect('/')
    }, 2000)
})

app.listen(3000, () => {
    console.log("Listening in port 3000")
});