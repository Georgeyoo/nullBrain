const router = require('express').Router();

const {
    registerUser,
    login,
    logout
} = require('../../controllers/user-controller');

router.route('/register').post(registerUser);

router.route('/login').post(login);

router.route('/logout').post(logout);

module.exports = router;
