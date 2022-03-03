const Usuario = require('../models/Usuario');
const Cargo = require('../models/Cargo');

module.exports = {
  async store(req, res) {
    const { nome, email, senha, cargo_nome } = req.body;

    const [ cargo ] = await Cargo.findOrCreate({
      where: {
        nome: cargo_nome
      }
    });

    const cargo_id = cargo.dataValues.id;

    const user = await Usuario.create({ nome, email, senha, cargo_id });

    await user.addCargo(cargo);

    return res.json(user);
  },
}