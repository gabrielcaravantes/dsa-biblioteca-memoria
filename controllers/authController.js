let registeredUsers = [];

exports.registerUser = (req, res) => {
  const { username, password } = req.body;

  //verificar se esta registrado
  const userExists = registeredUsers.find((user) => user.username === username);
  if (userExists) {
    return res.status(409).json({ message: 'Usuário já registrado.' });
  }

  //registrar usuario
  const newUser = {
    username,
    password,
  };

  registeredUsers.push(newUser);

  res.status(201).json({ message: 'Usuário registrado com sucesso.' });
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  // verifica credenciais
  const user = registeredUsers.find((user) => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  //autenticação bem sucessida
  res.json({ message: 'Login bem sucedido.' });
};