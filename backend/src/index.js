require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const authMiddleware = require('./middlewares/auth');
const userRoutes = require('./routes/user');
const contentRoutes = require('./routes/content');
const schoolClassRoutes = require('./routes/schoolClass');
const schoolDisciplineRoutes = require('./routes/schoolDiscipline');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', userRoutes);
app.use('/content', contentRoutes);
app.use('/schoolClass', schoolClassRoutes);
app.use('/schoolDiscipline', schoolDisciplineRoutes);

app.use(authMiddleware);

app.get('/', (req, res) => {
    res.json({ ok: true , user: req.userId });
});


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const SERVER_PORT = process.env.SERVER_PORT;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@teste.vh0nl.mongodb.net/?retryWrites=true&w=majority`)
.then(()=> {
    console.log('Banco de dados conectado...');
    app.listen(SERVER_PORT, () => {
        console.log('Servidor rodando na porta 3050...');
    });
})
.catch((err) => {
    console.log(err);
})