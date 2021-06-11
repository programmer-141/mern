import express from 'express';
import route from './routes/userRoute.js'
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const PORT = process.env.PORT || 5000
const URL = 'mongodb+srv://sid:@honey1412@cluster0.adyd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        app.listen(PORT, () => { console.log(`server running on port : ${PORT}`) })
    })
    .catch((err) => { console.log(err) })


app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/users', route)

