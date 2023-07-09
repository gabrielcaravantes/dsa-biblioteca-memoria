const express = require('express');
const livrosRoutes = require('./routes/livros');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());

app.use('/livros', livrosRoutes);
app.use('/auth', authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});