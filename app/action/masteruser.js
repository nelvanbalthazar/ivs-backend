const { masterUser } = require('../db/models/postgres/user/');
const config = require('../../config');
const jwt =  require('jsonwebtoken');

const insertUser = params => new Promise(async (resolve, reject) => {
  try {
    const result = await masterUser.create({
      name: params.name,
      email: params.email,
      password: params.password,
      createdAt: new Date(),
    });
    return resolve(result);
  } catch (err) {
    return reject(err);
  }
});

const loginUser = params => new Promise(async (resolve, reject) => {
  try {
    const result = await masterUser.findOne({
        where: {
          email: params.email,
          password: params.password,
        }
    });

    if(result === null) {
      const err = { message : "Access denied wrong user or password."}
      return reject(err);
    }
    const userData = {
      email: result.dataValues,
      password: result.dataValues
    }
  
    const accessToken = jwt.sign(userData, config.get('ACCESS_TOKEN_SECRET'));

    return resolve(accessToken);
  } catch (err) {
    return reject(err);
  }
});

const getAllNameList = params => new Promise(async (resolve, reject) => {
  try {
    const result = await masterUser.findAll(
      {attributes: ['name']}
    );
    return resolve(result);
  } catch (err) {
    return reject(err);
  }
});

const getAllNameAndEmailList = params => new Promise(async (resolve, reject) => {
  try {
    const result = await masterUser.findAll(
      {attributes: ['name', 'email']}
    );
    return resolve(result);
  } catch (err) {
    return reject(err);
  }
});


module.exports = {
  insertUser,
  loginUser,
  getAllNameList,
  getAllNameAndEmailList,
};
