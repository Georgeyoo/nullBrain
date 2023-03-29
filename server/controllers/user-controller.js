const User = require('../models/User');

const userController = {
  async registerUser(req, res) {
    try {
      const newUser = await User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });

      await req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.username = newUser.username;
        req.session.loggedIn = true;

        res.json(newUser);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          username: req.body.username,
        },
      });

      if (!user) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }

      const validPassword = await user.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }

      await req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.loggedIn = true;

        res.json({ user, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json({ message: 'No user account found!' });
    }
  },

  async logout(req, res) {
    if (req.session.loggedIn) {
      await req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  }
};

module.exports = userController;
