import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Conectado ao MongoDB!');
  })
  .catch((erro) => {
    console.log(erro);
  });

const aplicacao = express();

aplicacao.listen(3000, () => {
  console.log('O servidor está ouvindo na porta 3000!!!');
});
