const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => { 
    res.send('Olá Mundo!');
});


// importando rotas
const cardsRoutes = require('./src/routes/cards.route.js');

// rotas
app.use('/api/v1/cards', cardsRoutes);

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port} http://localhost:${port}`);
});