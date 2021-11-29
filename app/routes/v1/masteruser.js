const user = require('../../action/masteruser');
const { authenticateToken } = require('../../middleware/authenticate');
const Helpers = require('../../helpers/common');
const masteruser = require('../../db/models/postgres/user/masteruser');

const signUp = async (req, res) => {
  try {
    req.checkBody({
      name : { notEmpty: true, errorMessage: 'Name is required' },
      email : { notEmpty: true, errorMessage: 'email is required' },
      password: { notEmpty: true, errorMessage: 'password is required' },
    });

    const errors = req.validationErrors();
    if (errors) {
      return Helpers.error(res, errors);
    }

    const params = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    const insertUser = await user.insertUser(params);
    return Helpers.response(res, insertUser);
  } catch (err) {
    return Helpers.error(res, err);
  }
};

const signIn = async (req, res) => {
  try {
    req.checkBody({
      email : { notEmpty: true, errorMessage: 'email is required' },
      password: { notEmpty: true, errorMessage: 'password is required' },
    });

    const errors = req.validationErrors();
    if (errors) {
      return Helpers.error(res, errors);
    }

    const params = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    const loginUser = await user.loginUser(params);
    return Helpers.response(res, loginUser);
  } catch (err) {
    return Helpers.error(res, err);
  }
};

const nameList = async (req, res) => {
  try {
    const listOfNames = await user.getAllNameList();
    return Helpers.response(res, listOfNames);
  } catch (err) {
    return Helpers.error(res, err);
  }
};

const nameAndEmailList = async (req, res) => {
  try {
    const listOfEmailAndNames = await user.getAllNameAndEmailList();
    return Helpers.response(res, listOfEmailAndNames);
  } catch (err) {
    return Helpers.error(res, err);
  }
};



module.exports = (router) => {
  router.post('/signup', signUp);
  router.post('/signin', signIn);
  router.get('/nameList', authenticateToken, nameList);
  router.get('/nameAndEmailList', authenticateToken, nameAndEmailList);
};
