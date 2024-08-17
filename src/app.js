const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');


const app = express();


app.use(express.json());


app.use('/v1/user', userRoutes);


sequelize.sync()
    .then(() => {
        console.log('Sincronização do banco de dados concluída.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

module.exports = app;
