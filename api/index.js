import express from 'express';

const aplicacao = express();

aplicacao.listen(3000, () => {
  console.log('O servidor está ouvindo na porta 3000!!!');
});
