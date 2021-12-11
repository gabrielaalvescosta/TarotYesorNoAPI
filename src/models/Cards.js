const CardsDAO = require('../DAO/cardsDAO')
const database = require('../infra/sqlite-db')

class CardModel {
  // mesmo nome de tarotController
  static async getCards(req, res) {
    try {
      // pega info de cardsDAO
      const mostraCard = await CardsDAO.selectCard(database)
      res.status(200).json(mostraCard)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async selectCardsByID(req, res) {
    try {
      const id = req.params.id
      const pegaID = await CardsDAO.selectID(id, database)
      res.status(200).json(pegaID)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async createCards(req, res) {
    try {
      const body = req.body
      const cria = await CardsDAO.adicionaCard(body, database)
      res.status(200).json(cria)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async updateCards(req, res) {
    try {
      const id = req.params.id
      const body = req.body
      const updCard = await CardsDAO.atualCard(id, body, database)
      res.status(200).json(updCard)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async deleteCards(req, res) {
    try {
      const id = req.params.id
      const delCard = await CardsDAO.deleteCard(id, database)
      res.status(200).json(delCard)
    } catch (err) {
      res.status(400).json(err)
    }
  }
}

module.exports = CardModel