const mongoose = require('mongoose');
const User = mongoose.model('Usuario');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

process.env.SECRET_KEY = 'secret'
module.exports = {

  //cadastrando usuario
  async insert(req, res) {
    const userData = {
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password
    }

    await User.findOne({ email: req.body.email }) //verificando se email ja existe no banco
      .then(user => {
        if (!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash
            User.create(userData) //cadstro do usuario
              .then(user => {
                res.json({ status: user.email + '  foi Cadasatra' })
              })
              .catch(err => {
                res.send("Usuario não cadastrado erro:   " + err)
              })
          })
        } else {
          res.json({ error: 'Usuario já existe' })
        }
      })
      .catch(err => {
        res.send("Aconteceu um erro  " + err)
      })
  },

  //login de acesso
  async login(req, res) {
    await User.findOne({ email: req.body.email }) //verificando se email existe no banco
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) { //verifocando se senha esta correta
            const payload = {
              _id: user._id,
              nome: user.nome,
              email: user.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token)
          } else {
            res.json({ error: 'Ocorreu um erro na tentativa de login, verifique seus dados' })
          }
        } else {
          res.json({ error: 'Ocorreu um erro na tentativa de login, verifique seus dados' })
        }
      })
      .catch(err => {
        res.send("Aconteceu erro  " + err)
      })
  },

  async profile(req, res) {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    await User.findOne({ _id: decoded._id }) //verificando Id 
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('Usuario não existe');
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
}