const CardsModel = require('../models/Cards')

const cartas = (app) => {
  app.get('/', (req, res) => {
    res.send('<h1>Welcome to my API</h1>')
  })


     // mesmos nomes de Cards.js
  app.get('/cards', (req, res) => { 

    CardsModel.getCards(req, res)
  })

  app.get('/cards/:id', (req, res) => { 
    CardsModel.selectCardsByID(req, res)
  })

  app.post('/cards', (req, res) => {
    CardsModel.createCards(req, res)
  })

  app.patch('/cards/:id', (req, res) => {
    CardsModel.updateCards(req, res)
  })

  app.delete('/cards/:id', (req, res) => {
    CardsModel.deleteCards(req, res)
  })
}

module.exports = cartas