const userService = require("../services/user.service");
const mongoose = require("mongoose");

const create = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    res.status(400).send({ message: "Preencha todos os campos" })
  }

  const user = await userService.create(req.body);

  if (!user) return res.status(400).send({ message: "Erro na criação de usuário" })

  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      firstName,
      lastName,
      email,
    }
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAll();

  if (users.lenght === 0) return res.status(400).send({ message: "Não há usuários cadastrados" })

  res.send(users);
};

const findById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) res.status(400).send({ message: "Id inválida" })

  const user = await userService.findById(id);

  if (!user) return res.status(400).send({ message: "Usuário não encontrado" })

  res.send(user);
};

module.exports = {
  create,
  findAll,
  findById,
};