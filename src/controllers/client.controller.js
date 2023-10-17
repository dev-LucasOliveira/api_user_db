const clientService = require("../services/client.service");

const create = async (req, res) => {
  const {
    name,
    email,
    nationality,
    civilState,
    occupation, 
    documentNumber,
    documentIssuedBy,
    cpf,
    cep,
    address,
    district,
    city,
    state,
  } = req.body;

  if (
    !name ||
    !email ||
    !nationality ||
    !civilState ||
    !occupation || 
    !documentNumber ||
    !documentIssuedBy ||
    !cpf ||
    !cep ||
    !address ||
    !district ||
    !city ||
    !state
  ) {
    res.status(400).send({ message: "Preencha todos os campos" })
  }

  const client = await clientService.create(req.body);

  if (!client) return res.status(400).send({ message: "Erro na criação de cliente" })

  res.status(201).send({
    message: "Cliente criado com sucesso",
    client: {
      id: client._id,
      name,
      email,
      nationality,
      civilState,
      occupation, 
      documentNumber,
      documentIssuedBy,
      cpf,
      cep,
      address,
      district,
      city,
      state,
    }
  });
};

const findAll = async (req, res) => {
  const clients = await clientService.findAll();

  if (clients.lenght === 0) return res.status(400).send({ message: "Não há clientes cadastrados" })

  res.send(clients);
};

const find = async (req, res) => {
  const nameOrEmail = req.params.name;

  const clients = nameOrEmail.includes("@")
    ? await clientService.find({ "email": { $regex: nameOrEmail } })
    : await clientService.find({ "name": { $regex: nameOrEmail } });

  if (clients.length === 0) return res.status(400).send({ message: "Cliente não encontrado" })

  res.send(clients);
};

module.exports = {
  create,
  findAll,
  find,
};