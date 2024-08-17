const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });


sequelize.sync()
  .then(() => {
    console.log('Sincronização com o banco de dados concluída.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
