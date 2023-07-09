let livros = [];

exports.getLivros = (req, res) => {
  res.json(livros);
};

exports.createLivro = (req, res) => {
  const livro = req.body;
  livros.push(livro);
  res.status(201).json(livro);
  console.log("Livro criado com sucesso")
};

exports.updateLivro = (req, res) => {
  const id = req.params.id;
  const livroAtualizado = req.body;
  livros[id] = livroAtualizado;
  res.json(livroAtualizado);
};

exports.deleteLivro = (req, res) => {
  const id = req.params.id;
  livros.splice(id, 1);
  res.sendStatus(204);
  console.log("Livro deletado com sucesso")
};