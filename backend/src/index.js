require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//const authMiddleware = require('./middlewares/auth');


const app = express();


const userRoutes = require('./routes/user');
const contentRoutes = require('./routes/content');
const schoolClassRoutes = require('./routes/schoolClass');
const forumRoutes = require('./routes/forum');
const schoolDisciplineRoutes = require('./routes/schoolDiscipline');

const corsOptions = {
    origin: 'http://localhost:3050',
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions));
//app.use(authMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.json({ ok: true , user: req.userId });
});

app.use('/user', userRoutes);
app.use('/content', contentRoutes);
app.use('/school-class', schoolClassRoutes);
app.use('/forum', forumRoutes);
app.use('/school-discipline', schoolDisciplineRoutes);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const PORT = process.env.PORT;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@teste.vh0nl.mongodb.net/?retryWrites=true&w=majority`)
.then(()=> {
    console.log('Banco de dados conectado...');
    app.listen(PORT, () => {
        console.log('Servidor rodando na porta 3050...');
    });
})
.catch((err) => {
    console.log(err);
});