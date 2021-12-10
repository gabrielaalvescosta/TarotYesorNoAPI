const express = require('express');
const router = express.Router();

const cardsController = require('../controllers/cards.controller');


// get - chama a lista
router.get('/', cardsController.getCardsList);

// get - chama as cartas por id
router.get('/:id',cardsController.getCardByID);

// create - cria uma nova carta
router.post('/', cardsController.createNewCards);

// update - atualiza a lista (linha 41 controllers)
router.put('/:id', cardsController.updateCards);

// delete - deleta cartas da lista
router.delete('/:id', cardsController.deleteCards);

module.exports = router;