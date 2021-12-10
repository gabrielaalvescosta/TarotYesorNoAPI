const cardsModel = require('../models/cards.model');

// traz toda a lista de cartas
exports.getCardsList = (req, res)=> {
    cardsModel.getAllCards((err, allCards) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', allCards);
        res.send(allCards);
    })
}

// traz a carta por ID (número)
exports.getCardByID = (req, res)=>{
    cardsModel.getCardsByID(req.params.id, (err, card)=>{
        if(err)
        res.send(err);
        console.log('single employee data', card);
        res.send(card);
    })
}

// cria uma nova carta
exports.createNewCards = (req, res) =>{
    const cardNewData = new cardsModel(req.body);
    console.log('CREATE', cardNewData);
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        cardsModel.createCard(cardNewData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'You have a new card!', number: card.insertId, name: card.name})
        })
    }
}

// atualiza a carta
exports.updateCards = (req, res)=>{
    const cardNewData = new cardsModel(req.body);
    console.log('UPDATE', cardNewData);
 // impedindo que o preenchimento vá como vazio
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields!'});
    }else{
        cardsModel.updateCard(req.params.id, cardNewData, (err, card)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'UPDATED!'})
        })
    }
}

// deletar cartas
exports.deleteCards = (req, res)=>{
    cardsModel.deleteCard(req.params.id, (err, card)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Card deleted successully!'});
    })
}