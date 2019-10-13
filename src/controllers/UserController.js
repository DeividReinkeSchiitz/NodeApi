const User = require("../models/userModel");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const users = await User.paginate({}, { page, limit: 10 });
    // a proxima linah so executa quando o find termianr
    return res.json(users);
  },

  async show(req, res) {
    const user = await User.findById(req.params.id);

    return res.json(user);
  },

  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }); //atualização

    return res.json(user);
  },

  async destroy(req, res) {
    await User.findByIdAndRemove(req.params.id);

    return res.end();
  }
};
