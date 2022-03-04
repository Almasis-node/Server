const Usuario = require('../models/Usuario');
const Cargo = require('../models/Cargo');

const bcrypt = require('bcryptjs');

module.exports = {
  async store(req, res) {
    const { nome, email, senha, cargo_nome } = req.body;

    const [ cargo ] = await Cargo.findOrCreate({
      where: {
        nome: cargo_nome
      }
    });

    const user = await Usuario.create({ 
      nome, 
      email, 
      senha: await bcrypt.hash(senha, 10).toString() 
    });

    await user.addCargo(cargo);

    return res.json(user);
  },

  async index(req, res) {
    const users = await Usuario.findAll({
      attributes: ['nome', 'email'],
      include: { 
        association: 'cargo', 
        attributes: ['nome'], 
        through: { 
          attributes: [] 
        },
      }
    });

    if (!users) {
      return res.status(204).json({ error: 'Não há usuários cadastrados' })
    }

    return res.json(users);
  },

  async indexOne(req, res) {
    const { user_id } = req.params;

    const user = await Usuario.findByPk(user_id, {
      attributes: ['nome', 'email'],
      include: {
        association: 'cargo',
        attributes: ['nome'],
        through: {
          attributes: []
        }
      }
    });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    return res.json(user);
  },

  async update(req, res) {
    const { user_id } = req.params;
    const { nome, email, senha, cargo_nome } = req.body;

    const [ cargo ] = await Cargo.findOrCreate({
      where: {
        nome: cargo_nome
      }
    });

    let user = await Usuario.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    user = await Usuario.update({ nome, email, senha }, {
      where: {
        id: user_id
      }
    });

    user = await Usuario.findByPk(user_id);

    await user.setCargo(cargo);

    return res.json(user);
  },

  async delete(req, res) {
    const { user_id } = req.params;

    const user = await Usuario.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    await Usuario.destroy({
      where: {
        id: user_id
      }
    });

    return res.json();
  }
}