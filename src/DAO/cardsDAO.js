class CardsDAO {
  // mesmo nome de Cards.js (não confundir com as rotas em controllers)
  selectCard(cardsdb) {
    return new Promise((resolve, reject) => {
      cardsdb.all('SELECT * FROM CARDS', (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "cartas": rows,
            "error": false
          })
        }
      })
    }
    )
  }

  selectID(id, cardsdb) {
    return new Promise((resolve, reject) => {
      cardsdb.get('SELECT * FROM CARDS WHERE id = ?', id, (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "id": rows,
            "error": false
          })
        }
      })
    }
    )
  }


  adicionaCard(body, cardsdb) {
    return new Promise((resolve, reject) => {
      cardsdb.run(`INSERT INTO CARDS (url, card_name, yes_or_no, explanation) VALUES (?, ?, ?, ?)`, [body.url, body.card_name, body.yes_or_no, body.explanation], (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "card": body,
            "error": false
          })
        }
      })
    }
    )
  }



  atualCard(id, body, cardsdb) {
    return new Promise((resolve, reject) => {
      cardsdb.run(`UPDATE CARDS SET (url, card_name, yes_or_no, explanation) = (?, ?, ?, ?) WHERE id = ?`, [body.url, body.card_name, body.yes_or_no, body.explanation, id], (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "card": id,
            "error": false
          })
        }
      })
    }
    )
  }


  deleteCard(id, cardsdb) {
    return new Promise((resolve, reject) => {
      cardsdb.run(`DELETE FROM CARDS WHERE id = ?`, id, (err, rows) => {
        if (err) {
          reject(({ "mensagem": err.message, "error": true }))
        } else {
          resolve({
            "numero": id,
            "error": false
          })
        }
      })
    }
    )
  }
}

module.exports = new CardsDAO;