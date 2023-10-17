const Client = require("../models/Client");

const create = (body) => Client.create(body);
const findAll = () => Client.find();
const find = (name) => Client.find(name);

module.exports = {
  create,
  findAll,
  find,
};