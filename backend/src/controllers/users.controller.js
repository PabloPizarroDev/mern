const { use } = require("../routes/users");

const userCtrl = {};

const User = require("../models/User");
userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
userCtrl.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();
  res.json("user creater");
};
userCtrl.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id);
  res.json("user delete");
};

module.exports = userCtrl;
