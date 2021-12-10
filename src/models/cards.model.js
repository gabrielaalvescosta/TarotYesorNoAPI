let db = require('../../config/db.config');

let card = function(card){
    this.url    =   card.url;
    this.card_name      =   card.card_name;
    this.yes_or_no          =   card.yes_or_no;
    this.explanation        =   card.explanation;
};


// get all employees
card.getAllcards = (result) =>{
    db.query('SELECT * FROM cards WHERE is_deleted=0', (err, res)=>{
        if(err){
            console.log('Error while fetching cards', err);
            result(null,err);
        }else{
            console.log('cards fetched successfully');
            result(null,res);
        }
    })
};

// get card by ID from DB
card.getCardByID = (id, result)=>{
    db.query('SELECT * FROM cards WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching card by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new card
card.createCard = (cardReqData, result) =>{
    db.query('INSERT INTO cards SET ? ', cardReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('card created successfully');
            result(null, res)
        }
    })
}

// update card
card.updateCard = (id, cardNewData, result)=>{
    db.query("UPDATE cards SET url=?,card_name=?,yes_or_no=?,explanation=? WHERE id = ?", [cardNewData.url,cardNewData.card_name,cardNewData.yes_or_no,cardNewData.explanation, id], (err, res)=>{
        if(err){
            console.log('Error while updating the card!');
            result(null, err);
        }else{
            console.log("Card updated successfully");
            result(null, res);
        }
    });
}

// delete employee
card.deleteEmployee = (id, result)=>{
    // db.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the employee');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    db.query("UPDATE employees SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the employee');
            result(null, err);
        }else{
            console.log("Employee deleted successfully");
            result(null, res);
        }
    });
}

module.exports = card;