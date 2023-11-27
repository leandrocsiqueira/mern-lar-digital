import mongoose from 'mongoose';

const esquemaUsuario = new mongoose.Schema({
  nomeUsuario: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const usuario = mongoose.model('Usuario', esquemaUsuario);

export default usuario;