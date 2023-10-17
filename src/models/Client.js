const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  civilState: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  documentNumber: {
    type: String,
    required: true,
    unique: true,
  },
  documentIssuedBy: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  cep: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;