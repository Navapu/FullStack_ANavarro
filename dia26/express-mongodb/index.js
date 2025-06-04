import express from 'express';
import cors from 'cors';
import { errorMiddleware, notFoundHandler } from './middleware/error.midddleware.js';
import indexRouter from './routes/index.routes.js';
import { connectDB } from './db/moongose.js';
const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));

connectDB();

app.get("/", (req, res) => {
    res.send('Welcome to our API with MongoDB')
})


app.use('/users', indexRouter);

app.use(notFoundHandler);
app.use(errorMiddleware);

app.listen(3000, () => {
    console.log('Listening in port 3000')
})